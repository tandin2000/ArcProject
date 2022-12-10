import React from "react";
import { withRouter } from "react-router-dom";
import emailjs from 'emailjs-com';
import Reveal from 'react-reveal/Reveal';

import Footer from '../components/Footer';

import { Efect, Efect1, Efect2  } from "../styles/effect.styles";
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const Contact = ({ history }) => {

   

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
              <form className="" >
              <label>What Type of Project Would You Like a Quote On?</label>
              <select id="selectbasic" name="selectbasic" class="form-control">
      <option value="1">Option one</option>
      <option value="2">Option two</option>
    </select>
    <br/>
    <label>Project Brief</label>
                <textarea class="form-control" name="message" required />
                <br/>
    <label>What's the site address?</label>
                <textarea class="form-control" name="message" required />
                <br/>
                <label>Upload Plans & Specifications</label><br/>
                <small>Maximum 10 files.</small>
                <br/>
                <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
  <br/>
                <label>What's the site address?</label>
                <input type="text" name="user_name" class="form-control" required />
                <br/>
                <label>What's your Name</label>
                <input type="text" name="user_name" class="form-control" required />
                <br/>
                <label>What's your Contact No</label>
                <input type="text" name="user_name" class="form-control" required />
                <br/>
                <label>And what's the name of your company/organisation?</label>
                <input type="text" name="user_name" class="form-control" required />
                <br/>
                <label>Email</label>
                <input type="email" name="user_email" class="form-control" required />
               
                <div id='success' className='hide'>Your message has been sent...</div>
                <div id='failed' className='hide'>Message failed...</div>
                <div className="formcontact">
                <button type="submit" id='buttonsent'>
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
