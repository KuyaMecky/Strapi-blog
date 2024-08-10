// import dynamic from 'next/dynamic';
// import 'react-quill/dist/quill.snow.css'; // Import styles

// // Dynamically import react-quill to prevent SSR issues
// const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

// interface RichTextProps {
//   data: {
//     body: string;
//   };
// }

// export default function RichText1({ data }: RichTextProps) {
//   return (
//     <section className="rich-text py-6 dark:bg-black dark:text-gray-50">
//       <ReactQuill
//         value={data.body}
//         readOnly
//         theme="snow"
//         formats={[
//           'header', 'font', 'size',
//           'bold', 'italic', 'underline',
//           'list', 'bullet', 'indent',
//           'link', 'image',
//         ]}
//       />
//     </section>
//   );
// }

// wag na mag rich text na normal using markdown version nlng ang gamitin 
