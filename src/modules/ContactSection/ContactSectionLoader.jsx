import React from "react"
import ContentLoader from "react-content-loader"

const ContactSectionLoader = (props) => (
  <div>
  <ContentLoader 
    speed={2}
    width={480}
    height={280}
    viewBox="0 0 540 280"
    backgroundColor="#d4d4d4"
    foregroundColor="#ecebeb"
    {...props}
  >
  <rect x="6" y="4" rx="10" ry="10" width="530" height="276" />
  </ContentLoader>
  </div>
  
)

export default ContactSectionLoader