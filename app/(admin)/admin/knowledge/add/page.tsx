"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useGeneralContext } from "@/context/GenralContext";
import axios from "axios";
import { success, error } from "@/helpers/Alert";
import Spinner from "@/components/spinner/Spinner";
import Editor from "@/components/QuillEditor/Editor"; // Ensure Editor component is correctly implemented

const AddTopic = () => {
  const router = useRouter();
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const { topicLoading, setTopicLoading, getAllTopics }: any =
    useGeneralContext();

  const goBack = async () => {
    await getAllTopics();
    router.push("/admin/knowledge/");
  };

  const [image, setImage] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "", // Add description here
    body: "",
  });

  // Handle text input changes
  const onchangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle image upload
  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  // Handle Quill editor content change
  const onEditorChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      body: value, // Store editor content in state
    }));
  };

  // Handle form submission
  const createTopic = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTopicLoading(true);

    // Prepare FormData
    const data = new FormData();
    data.append("title", formData.title);
    data.append("body", formData.body);
    data.append("description", formData.description); // Add description from editor
    if (image) data.append("image", image);

    try {
      const response = await axios.post(`${base_url}/topics/add`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("🚀 ~ createTopic ~ response:", response);
      setTopicLoading(false);

      if (response.status === 200) {
        success("New topic created.");
        goBack();
      }
    } catch (err: any) {
      console.log(err);
      error(err.response?.data?.message || "An error occurred.");
      setTopicLoading(false);
    }
  };

  return (
    <form
      onSubmit={createTopic}
      className="w-[70%] mx-auto my-5 shadow-lg bg-white p-8 flex flex-col gap-4 rounded-lg"
    >
      {/* Header */}
      <div className="flex w-full gap-4 items-center justify-between">
        <span className="text-xl font-sans font-semibold">Add Topic</span>
        <span
          className="bg-teal-600 rounded-lg p-2 px-4 flex items-center justify-center text-white cursor-pointer hover:bg-teal-500"
          onClick={goBack}
        >
          Back
        </span>
      </div>

      {/* Title Input */}
      <div className="flex flex-col gap-2 my-2">
        <label className="text-gray-400">
          Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          name="title"
          required
          onChange={onchangeHandler}
          placeholder="Please add topic title here..."
          className="bg-gray-300/40 p-2 w-full rounded-lg outline-2 outline-teal-500"
        />
      </div>

      {/* Image Input */}
      <div className="flex flex-col gap-2 my-2">
        <label className="text-gray-400">
          Image <span className="text-red-400">*</span>
        </label>
        <input
          type="file"
          name="image"
          required
          onChange={onImageChange}
          className="bg-gray-300/40 p-2 w-full rounded-lg outline-2 outline-teal-500"
        />
      </div>

      {/* Description Input */}
      <div className="flex flex-col gap-2 my-2">
        <label className="text-gray-400">
          Description <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          name="description"
          required
          onChange={onchangeHandler}
          placeholder="Please add topic description here..."
          className="bg-gray-300/40 p-2 w-full rounded-lg outline-2 outline-teal-500"
        />
      </div>

      {/* Quill Editor */}
      <div className="flex flex-col gap-2 my-2">
        <label className="text-gray-400">
          Body<span className="text-red-400">*</span>
        </label>
        <div className="w-full h-[400px]">
          <Editor value={formData.body} onChange={onEditorChange} />
        </div>
      </div>

      {/* Submit Button or Spinner */}
      {topicLoading ? (
        <Spinner />
      ) : (
        <button
          type="submit"
          className="bg-teal-600 rounded-lg p-2 px-4 my-4 mx-auto w-1/2 text-white hover:bg-teal-500"
        >
          Add Topic
        </button>
      )}
    </form>
  );
};

export default AddTopic;

// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { useGeneralContext } from "@/context/GenralContext";
// import axios from "axios";
// import { success, error } from "@/helpers/Alert";
// import Spinner from "@/components/spinner/Spinner";
// import Editor from "@/components/QuillEditor/Editor";

// const AddTopic = () => {
//   const router = useRouter();

//   const base_url = process.env.NEXT_PUBLIC_BASE_URL;
//   const { topicLoading, setTopicLoading, getAllTopics }: any =
//     useGeneralContext();

//   const goBack = async () => {
//     await getAllTopics();
//     router.push("/admin/knowledge/");
//   };

//   const [image, setImage] = useState<File | null>(null);
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//   });

//   const onchangeHandler = async (e: any) => {
//     e.persist();
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setImage(e.target.files[0]);
//     }
//   };

//   const createTopic = async (e: any) => {
//     e.preventDefault();
//     setTopicLoading(true);
//     console.log("formData", formData);
//     const data = new FormData();
//     data.append("title", formData.title);
//     data.append("description", formData.description);

//     if (image) {
//       data.append("image", image);
//     }
//     try {
//       const response = await axios.post(`${base_url}/topics/add`, formData, {
//         headers: { "content-type": "application/json" },
//       });
//       console.log("🚀 ~ createTopic ~ response:", response);
//       setTopicLoading(false);
//       if (response.status === 200) {
//         success("New topic created.");
//         goBack();
//       }
//     } catch (err: any) {
//       console.log(err);
//       error(err.response.data.message);
//       error(err.response.data.error);
//       setTopicLoading(false);
//     }
//   };

//   return (
//     // <div className="w-[70%] mx-auto my-5 shadow-lg bg-white p-8 flex flex-col gap-4 rounded-lg">
//     <form
//       onSubmit={createTopic}
//       className="w-[70%] mx-auto my-5 shadow-lg bg-white p-8 flex flex-col gap-4 rounded-lg"
//     >
//       {/* top stuff */}
//       <div className="flex w-full gap-4 items-center justify-between">
//         <span className="text-xl font-sans font-semibold">Add Topic</span>
//         <span
//           className="bg-teal-600 rounded-lg p-2 px-4 flex items-center justify-center outline-none text-white cursor-pointer hover:bg-teal-500 ml-14"
//           onClick={goBack}
//         >
//           Back
//         </span>
//       </div>
//       {/* Name */}
//       <div className="flex flex-col align-start justify-center gap-2 my-2">
//         <span className="text-gray-400">
//           Name <span className="text-red-400">*</span>
//         </span>
//         <input
//           type="text"
//           name="title"
//           id="title"
//           required
//           onChange={onchangeHandler}
//           placeholder="Please add topic title here . . ."
//           className="bg-gray-300/40 p-2 w-full rounded-lg outline-2 outline-teal-500"
//         />
//       </div>
//       {/* Image */}
//       <div className="flex flex-col align-start justify-center gap-2 my-2">
//         <span className="text-gray-400">
//           Image <span className="text-red-400">*</span>
//         </span>
//         <input
//           type="file"
//           name="image"
//           id="image"
//           required
//           onChange={onImageChange}
//           placeholder="Please add image here . . ."
//           className="bg-gray-300/40 p-2 w-full rounded-lg outline-2 outline-teal-500"
//         />
//       </div>
//       {/* Desctiption */}
//       <div className="flex flex-col align-start justify-center gap-2 my-2">
//         <span className="text-gray-400">
//           Description <span className="text-red-400">*</span>
//         </span>
//         <textarea
//           name="description"
//           id="description"
//           required
//           onChange={onchangeHandler}
//           placeholder="Please add topic description here . . ."
//           className="bg-gray-300/40 p-2 w-full rounded-lg outline-2 outline-teal-500"
//         />
//       </div>
//       <div className="flex flex-col align-start justify-center gap-2 my-2">
//         <span className="text-gray-400">
//           Description <span className="text-red-400">*</span>
//         </span>
//         <div className="flex w-full h-[400px]">
//           <Editor
//             value={formData.description}
//             onChange={onchangeHandler}
//             // onChange={(value) => {
//             //   field.onChange(value);
//             // }}
//           />
//         </div>
//       </div>
//       {topicLoading ? (
//         <>
//           <Spinner />
//         </>
//       ) : (
//         <>
//           <button
//             className="bg-teal-600 rounded-lg p-2 px-4 my-4 mx-auto w-1/2 flex items-center justify-center outline-none text-white cursor-pointer hover:bg-teal-500"
//             type="submit"
//           >
//             Add Topic
//           </button>
//         </>
//       )}
//     </form>
//     // </div>
//   );
// };

// export default AddTopic;
