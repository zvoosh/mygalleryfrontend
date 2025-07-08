// import { Spin } from "antd";
// import "../../styles/event.scss";
// import "../../styles/clients.scss";
// import { useLocation, useParams } from "react-router";
// import { useFolderContent } from "../../api/queries";
// import { LoadingOutlined } from "@ant-design/icons";

// const ClientDetailsPage = () => {
//   const { client, videoId } = useParams();
//   const location = useLocation();
//   const descTXT = location.state?.description;

//   const { data, isLoading, error } = useFolderContent(videoId);

//   if (isLoading)
//     return (
//       <div
//         style={{
//           width: "100vw",
//           height: "100vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Spin
//           indicator={
//             <LoadingOutlined style={{ fontSize: 48, color: "gray" }} spin />
//           }
//         />
//       </div>
//     );
//   if (error) return <div>Error loading files.</div>;

//   return (
//     <main className="w-100 h-100 text-gray">
//       <div className="flex justify-center w-100 h-100">
//         <div className="client-details-container">
//           <div>
//             <section>
//               <h1 className="font-20 normal-font pb-2 text-white w-100">
//                 {client}
//               </h1>
//               <div className="pb-2 normal-font font-12">
//                 <p className="pb-1">{descTXT}</p>
//               </div>
//             </section>
//             {/* <Carousel
//               autoplay={false}
//               autoplaySpeed={3000}
//               ref={carouselRef}
//               arrows={true}
//               dots={false}
//             > */}
//             {data?.children?.map((video, idx) => {
//               if (video.name == "Videos" && video.children) {
//                 return video.children.map((item: any) => {
//                   return (
//                     <div key={idx} className="w-100 h-100 mt-5">
//                       <iframe
//                         src={`https://drive.google.com/file/d/${item.id}/preview`}
//                         allow="autoplay"
//                         className="border-none video-frame"
//                         allowFullScreen
//                         title="Google Drive Video"
//                       />
//                     </div>
//                   );
//                 });
//               }
//             })}
//             {/* </Carousel> */}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export { ClientDetailsPage };
