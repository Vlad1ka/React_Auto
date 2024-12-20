import React from "react"
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader className="auto-block"
    speed={2}
    width={400}
    height={500}
    viewBox="0 0 400 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    {/* <circle cx="134" cy="136" r="125" />  */}
    <rect x="40" y="0" rx="10" ry="10" width="317" height="150" />
    <rect x="40" y="210" rx="10" ry="10" width="317" height="35" /> 
    <rect x="5" y="270" rx="10" ry="10" width="390" height="80" /> 
    <rect x="0" y="410" rx="10" ry="10" width="160" height="35" /> 
    <rect x="240" y="400" rx="24" ry="24" width="152" height="60" />
  </ContentLoader>
)

export default Skeleton;