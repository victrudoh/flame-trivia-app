"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useGeneralContext } from "@/context/GenralContext";
import axios from "axios";
import { success, error } from "@/helpers/Alert";
import Spinner from "@/components/spinner/Spinner";
import Editor from "@/components/QuillEditor/Editor";
import Image from "next/image";

const EditTopic = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const {
    topicLoading,
    setTopicLoading,
    getAllTopics,
    getOneTopic,
    oneTopic,
  }: any = useGeneralContext();

  const [image, setImage] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    body: "",
    image: "",
  });

  // Synchronize state when `oneTopic` changes
  useEffect(() => {
    if (id) getOneTopic(id);
  }, [id]);

  useEffect(() => {
    if (oneTopic) {
      setFormData({
        title: oneTopic.title || "",
        description: oneTopic.description || "",
        body: oneTopic.body || "",
        image: oneTopic.image || "",
      });
    }
  }, [oneTopic]);

  const goBack = async () => {
    await getAllTopics();
    router.push("/admin/knowledge/");
  };

  const onchangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const onEditorChange = (value: string) => {
    console.log("Editor value:", value); // Check if it logs correctly
    setFormData((prev) => ({ ...prev, body: value }));
  };

  const updateTopic = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTopicLoading(true);

    const data = new FormData();
    data.append("title", formData.title);
    data.append("body", formData.body);
    data.append("description", formData.description);

    // Append image only if a new image is selected
    if (image) {
      data.append("image", image);
    } else {
      data.append("image", formData.image);
    }

    try {
      const response = await axios.put(
        `${base_url}/topics/edit?id=${oneTopic?._id}`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.status === 200) {
        success("Updated Topic.");
        goBack();
      }
    } catch (err: any) {
      error(err.response?.data?.message || "An error occurred.");
    } finally {
      setTopicLoading(false);
    }
  };

  const deleteHandler = async (id: string) => {
    try {
      setTopicLoading(true);
      const response = await axios.delete(
        `${base_url}/topics/delete?id=${id}`,
        { headers: { "content-type": "application/json" } }
      );

      if (response.status === 200) {
        success("Deleted Topic Successfully");
        getAllTopics();
        goBack();
      }
    } catch (err: any) {
      error(err.response?.data?.error || "An error occurred.");
    } finally {
      setTopicLoading(false);
    }
  };

  return (
    <form
      onSubmit={updateTopic}
      className="w-[70%] mx-auto my-5 shadow-lg bg-white p-8 flex flex-col gap-4 rounded-lg"
    >
      <div className="flex w-full gap-4 items-center justify-between">
        <span className="text-xl font-sans font-semibold">Edit Topic</span>
        <span
          className="bg-teal-600 rounded-lg p-2 px-4 text-white cursor-pointer hover:bg-teal-500"
          onClick={goBack}
        >
          Back
        </span>
      </div>

      <div className="flex flex-col gap-2 my-2">
        <label className="text-gray-400">Name: </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={onchangeHandler}
          placeholder="Please add topic title here..."
          className="bg-gray-300/40 p-2 w-full rounded-lg outline-teal-500"
        />
      </div>

      <div className="flex flex-col gap-2 my-2">
        <label className="text-gray-400">Image: </label>
        {formData.image && (
          <Image
            src={formData.image}
            alt="img"
            width={320}
            height={240}
            className="object-cover border-4 rounded-xl"
          />
        )}
        <input
          type="file"
          onChange={onImageChange}
          className="bg-gray-300/40 p-2 w-full rounded-lg outline-teal-500"
        />
      </div>

      <div className="flex flex-col gap-2 my-2">
        <label className="text-gray-400">Description: </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={onchangeHandler}
          placeholder="Please add topic description here..."
          className="bg-gray-300/40 p-2 w-full rounded-lg outline-teal-500"
        />
      </div>

      <div className="flex flex-col gap-2 my-2">
        <label className="text-gray-400">Body: </label>
        <div className="w-full h-[400px]">
          <Editor value={formData.body} onChange={onEditorChange} />
        </div>
      </div>

      {topicLoading ? (
        <Spinner />
      ) : (
        <div className="flex w-full items-center justify-evenly gap-4 my-8">
          <button
            type="button"
            onClick={() => deleteHandler(oneTopic?._id)}
            className="bg-red-600 rounded-lg p-2 px-4 w-1/3 text-white hover:bg-red-500"
          >
            Delete Topic
          </button>
          <button
            type="submit"
            className="bg-teal-600 rounded-lg p-2 px-4 w-1/3 text-white hover:bg-teal-500"
          >
            Update Topic
          </button>
        </div>
      )}
    </form>
  );
};

const Page = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <EditTopic />
  </Suspense>
);

export default Page;
