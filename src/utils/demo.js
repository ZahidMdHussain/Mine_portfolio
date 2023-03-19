// import { useFormik } from "formik";
// import { UserContact } from "./schemas/FormSchemas";

// const initialValues = {
//   name: "",
//   email: "",
//   message: "",
// };

//const Contact = () => {
//   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//     useFormik({
//       initialValues: initialValues,
//       validationSchema: UserContact,
//       onSubmit: (values, action) => {
//         console.log(values);
//         action.submitForm(
//           "https://getform.io/f/9b0643fa-8394-484a-b940-f27bb0caf512"
//         );
//         action.resetForm();
//       },
//     });

//   return (
//     <div
//       name="contact"
//       className="md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-24 pb-8 md:pt-0 md:pb-0"
//     >
//       <div className="flex justify-center mx-auto max-w-screen-lg flex-col text-white w-full h-full px-4 selection:text-white selection:bg-cyan-500">
//         <div className="my-2 py-1 w-fit">
//           <h1 className="text-4xl w-fit font-bold border-b-4 border-cyan-600">
//             Contact
//           </h1>
//           <p className="mt-2 mb-4 text-cyan-400">
//             Feel free to Contact me by submitting the form below and I will get
//             back to you as soon as possible.
//           </p>
//         </div>
//         <div className="flex justify-center items-center">
//           <form
//             onSubmit={handleSubmit}
//             action="https://getform.io/f/9b0643fa-8394-484a-b940-f27bb0caf512"
//             method="POST"
//             className="flex flex-col mx-4 w-full md:w-1/2"
//           >
//             <input
//               type="text"
//               name="name"
//               value={values.name}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               placeholder="Your Name.."
//               className={
//                 "p-2 bg-transparent border text-white rounded-md focus:outline-none focus:border-cyan-500 " +
//                 (errors.name && touched.name
//                   ? "border-red-500"
//                   : "border-white")
//               }
//               autoComplete="off"
//             />
//             <input
//               type="text"
//               name="email"
//               value={values.email}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               placeholder="Your Email.."
//               className={
//                 "p-2 my-4 bg-transparent border text-white rounded-md focus:outline-none focus:border-cyan-500 " +
//                 (errors.email && touched.email
//                   ? "border-red-500"
//                   : "border-white")
//               }
//               autoComplete="off"
//             />
//             <textarea
//               name="message"
//               rows="10"
//               value={values.message}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               placeholder="Your Message.."
//               className={
//                 "p-2 bg-transparent border text-white rounded-md focus:outline-none focus:border-cyan-500 " +
//                 (errors.message && touched.message
//                   ? "border-red-500"
//                   : "border-white")
//               }
//               autoComplete="off"
//             ></textarea>
//             <button
//               type="submit"
//               className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 my-8 mx-auto flex items-center rounded-md duration-300 font-semibold hover:font-bold hover:text-blue-900 focus:outline-none"
//             >
//               Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// Form Schemas

// import * as Yup from "yup";

// export const UserContact = Yup.object({
//   name: Yup.string().min(3).max(30).required("Please enter your name"),
//   email: Yup.string().email().required("Please enter your email"),
//   message: Yup.string().min(5).max(300).required("Please Leave your message"),
// });
