import React, { Fragment, Suspense } from "react";
import { unstable_createResource, Resource } from "react-cache";

// const imageReacource = unstable_createResource(
//     source =>
//         new Promise(resolve => {
//             const img = new Image();
//             img.src = source;
//             img.onload = resolve;
//         })
// );

// const Img = ({ src, alt, ...props}) => {
//     imageReacource.read(src);
//     return <img src={src} alt={alt} {...props}/>
// }

const Home = ({ session }) => {

    return (
        <Fragment>
            <h1>Home</h1>
            <Suspense fallback={<img src='/aaa.jpg' alt='me'/>}>
                {/* <Img src='/a.jpg' alt='masoud' /> */}
            </Suspense>
        </Fragment>
    )
};

export default Home;