import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import emailjs from 'emailjs-com';
import Reveal from 'react-reveal/Reveal';

import Footer from '../components/Footer';

import { Efect, Efect1, Efect2  } from "../styles/effect.styles";
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
// const props = {
//   name: 'file',
//   action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
//   headers: {
//     authorization: 'authorization-text',
//   },
//   onChange(info) {
//     if (info.file.status !== 'uploading') {
//       console.log(info.file, info.fileList);
//     }
//     if (info.file.status === 'done') {
//       message.success(`${info.file.name} file uploaded successfully`);
//     } else if (info.file.status === 'error') {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
// };
const Contact = ({ history }) => {
 const [selectOption, setSelectOption] = useState('');
  const [projectBrief, setProjectBrief] = useState('');
  const [siteAddress, setSiteAddress] = useState('');
  const [userName, setUserName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
 

  const handleFormSubmit = (event) => {
   event.preventDefault();
   const successDiv = document.getElementById("success");
   const failedDiv = document.getElementById("failed");
   const failedDiv2 = document.getElementById("failed2");
   const content = `Selected Option: ${selectOption} \n
                    Project Brief:' ${projectBrief} \n
                    Site Address: ${siteAddress} \n
                    Company Name: ${companyName} \n
                    Name: ${userName} \n
                    Contact No: ${contactNo} \n
                  `
   console.log(uploadedImage, "yo")
    if (uploadedImage) {
      const templateParams = {
         to_name: userName,
         message: content,
         image: uploadedImage,
         reply_me: "rotundamax@gmail.com",
         from_name: "Rotunda Max",
         reply_to: userEmail,
      };

      emailjs.send('service_4sx92xs', 'template_um7zfnk', templateParams, 'oWchOxcflLkcMKaLu')
        .then((response) => {
          console.log('Email sent successfully!', response);
            successDiv.classList.remove("hide");
            failedDiv.classList.add("hide");
            failedDiv2.classList.add("hide");
        })
        .catch((error) => {
          console.error('Error sending email:', error);
            successDiv.classList.add("hide");
            failedDiv2.classList.add("hide");
            failedDiv.classList.remove("hide");
        });
    }else{
      successDiv.classList.add("hide");
      failedDiv2.classList.remove("hide");
      failedDiv.classList.add("hide");
    }


    // Perform additional actions or send the data to the server
  };

  const [fileList, setFileList] = useState([]);

  const handleFileChange = ({ fileList }) => {
    // Limit the number of uploaded files to 1
    fileList = fileList.slice(-1);
     setFileList(fileList);
    handleUploadClick(fileList)
  };

  const handleUploadClick = (fileListv) => {
    if (fileListv.length > 0) {
      const file = fileListv[0];
      const reader = new FileReader();
      reader.onload = (event) => {
         setUploadedImage(event.target.result);
      };
      reader.readAsDataURL(file.originFileObj);
    }
  };
   

  return (
    <div>
      <Efect/>
      <Efect1/>
      <Efect2/>

      <div className="jumbotron head"/>

      <Reveal effect="fadeInUp">
       <section className='container'>
          <div className='row'>
            <div className='col-12'>
              <h1>Project Enquiry </h1>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
       <section className='container pt-0'>
          <div className='row'>
           
            <div className='col-md-6'>
            <div class="sqs-block-content">
   <p class="sqsrte-large" ><strong>Pricing Guide</strong></p>
   <ul data-rte-list="default">
      <li>
         <p class="" >Static 3D renders range from $4,000 - $4,500 per image.</p>
      </li>
      <li>
         <p class="" >Animation 3D films start from $25,000 for a 30-second clip.</p>
      </li>
   </ul>
   <p class="" >When creating proposals, we tend to price the whole project, rather than individual images. This allows us to optimise the camera angle selection that will work best for specific project requirements &amp; budgets. For instance, a 6-render interior package from a single unit type will cost significantly less than the same amount of images from two different unit types.</p>
   <p class="" data-rte-preserve-empty="true" ></p>
   <p class="sqsrte-large" ><strong>Information we need to prepare a proposal?</strong></p>
   <ol data-rte-list="default">
      <li>
         <p class="" ><strong>Architectural Plans</strong>&nbsp;- this will give us a general understanding of the project, its location and unit type selection.<br/></p>
      </li>
      <li>
         <p class="" ><strong>Project Brief</strong></p>
         <ul data-rte-list="default">
            <li>
               <p class="" ><em>At what stage of the development process are you?</em></p>
            </li>
            <li>
               <p class="" ><em>When are you planning on launching your sales &amp; marketing campaign?&nbsp;</em></p>
            </li>
            <li>
               <p class="" ><em>What areas &amp; floor plans are you looking to showcase with 3D Renders?<br/></em></p>
            </li>
         </ul>
      </li>
      <li>
         <p class="" ><strong>Information availability</strong>&nbsp;- what information will we have to work with?</p>
         <ul data-rte-list="default">
            <li>
               <p class="" ><em>3D Model</em></p>
            </li>
            <li>
               <p class="" ><em>Exterior finishes</em></p>
            </li>
            <li>
               <p class="" ><em>Interior finishes</em></p>
            </li>
            <li>
               <p class="" ><em>Landscaping plans</em></p>
            </li>
         </ul>
      </li>
   </ol>
</div>
            </div>

            <div className='col-md-6'>
            <div className="form-side">
              <form onSubmit={handleFormSubmit}>
      <label>What Type of Project Would You Like a Quote On?</label>
      <select
        id="selectbasic"
        name="selectbasic"
        className="form-control"
        value={selectOption}
        onChange={(event) => setSelectOption(event.target.value)}
      >
        <option value="1">Option one</option>
        <option value="2">Option two</option>
      </select>
      <br />
      <label>Project Brief</label>
      <textarea
        className="form-control"
        name="message"
        value={projectBrief}
        onChange={(event) => setProjectBrief(event.target.value)}
        required
      ></textarea>
      <br />
      <label>Upload Plans & Specifications</label><br/>
                <small>Maximum 10 files.</small>
                <br/>
                <Upload
                  fileList={fileList}
                  onChange={handleFileChange}
                  beforeUpload={() => false}
                  >
                {/* <Upload {...props}> */}
         <Button  icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
      <br/>
      <label>What's the site address?</label>
      <input
        type="text"
        name="site_address"
        className="form-control"
        value={siteAddress}
        onChange={(event) => setSiteAddress(event.target.value)}
        required
      />
      <br />
      <label>What's your Name</label>
      <input
        type="text"
        name="user_name"
        className="form-control"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
        required
      />
      <br />
      <label>What's your Contact No</label>
      <input
        type="text"
        name="contact_no"
        className="form-control"
        value={contactNo}
        onChange={(event) => setContactNo(event.target.value)}
        required
      />
      <br />
      <label>And what's the name of your company/organisation?</label>
      <input
        type="text"
        name="company_name"
        className="form-control"
        value={companyName}
        onChange={(event) => setCompanyName(event.target.value)}
        required
      />
      <br />
      <label>Email</label>
      <input
        type="email"
        name="user_email"
        className="form-control"
        value={userEmail}
        onChange={(event) => setUserEmail(event.target.value)}
        required
      />
      <br/>
      <div id="success" className="hide"  style={{color: "green"}}>
        Thank you, Your message has been sent...
      </div>
      <div id="failed" className="hide"  style={{color: "red"}}>
        Message failed to deliver, Try again later...
      </div>
      <div id="failed2" className="hide"  style={{color: "red"}}>
        Image isn't uploaded
      </div>
      <div className="formcontact">
        <button type="submit" id="buttonsent">
          <span className="shine"></span>
          <span>Send</span>
        </button>
      </div>
    </form>
            </div>
          </div>


          </div>
       </section>
      </Reveal>

      

      <Footer />

    </div>
    
  );
};

export default withRouter(Contact);
