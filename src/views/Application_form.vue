<template>
  <div class="container">
    <div class="bg-content">
      <Application_form_SVG></Application_form_SVG>
    </div>


<!-- Application Form  -->

    <div class="form-body">

      <h4>UIDesignDaily</h4>

      <h2><strong>Upload Files</strong></h2>
          
      <form @submit.prevent="submitForm" class="custom-form">

      

      <!-- Authorization Key Input -->
        <div class="form-row">
          <div class="item">
            <label>Authorization Key:</label>
            <input v-model="authorizationKey" type="password" placeholder="Authorization Key" required/>
            <p class="error"> {{keyError}} </p>
          </div>

      <!-- Tags Input -->
          <div class="item">
            <label>Tags (comma separated):</label>
            <input v-model="tags" type="text" placeholder="Tags (comma separated)" required/>
          </div>
        </div>
      
      <!-- Title Input -->
        <div class="form-row">
          <div class="item">
            <label>Title:</label>
            <input v-model="title" type="text" placeholder="Title" required/>
          </div>
          
        <!-- Date Input -->
          <div class="item">
            <label>Date (DD/MM/YYYY):</label>
            <input v-model="date" type="text" placeholder="DD/MM/YYYY" required/>
          </div>
        </div>
       
        <!-- Description Input -->
        <div class="form-row">
          <div class="item">
            <label>Description:</label>
            <textarea v-model="description" placeholder="Description" required></textarea>
          </div>
          

        <!-- Drop down Options  -->
          <div class="item">
            <label>Software:</label>
              <select v-model="role" required>
                <option value="Sketch" selected>Sketch</option>
                <option value="NFT">NFT</option>
              </select>
            
        <!-- Upload Files  -->
            <div class="form-row" style="margin-top: 12px;">
             <div class="item">
               <label>Thumbnail Image:</label>
                   <div class="file-upload-container">
               <label for="thumbnailInput" class="custom-file-input-label">Upload File</label>
                     <input id="thumbnailInput" type="file" @change="handleThumbnailImageUpload" required/> 
                   <div v-if="!thumbnailImage" class="noFile">No file uploaded</div>
             </div>
            </div>
    
    <div class="item">
      <label>Source File:</label>
      <div class="file-upload-container">
        <label for="sourceInput" class="custom-file-input-label">Upload File</label>
        <input id="sourceInput" type="file" @change="handleSourceFileUpload" required/>
        <div v-if="!sourceFile" class="noFile">No file uploaded</div>
      </div>
    </div>
  </div>

          </div>
      </div>



    <!-- Submit Button -->
      <button type="submit" @click="submitForm()"><strong>Submit</strong></button>
    </form>
    </div>
  </div>
</template>

<script>
import Application_form_SVG from '@/components/Application_form_SVG.vue';
import axios from 'axios'; //It creates a variable named 'axios' that references the functionality provided by Axios.

export default {
  name: 'form',
  components: { Application_form_SVG },
  data() {
    return {
      authorizationKey: '',
      title: '',
      description: '',
      tags: [],
      date: '',
      role: 'Sketch', 
      thumbnailImage: null,
      sourceFile: null,
      keyError: '',
    };
  },
  methods: {
    validateForm () {
      //Password validation - Validates the authorization key and provides an 'Invalid' message when the entered key is incorrect.
      this.keyError = this.authorizationKey === '12345' ? '' : 'Invalid Authorization Key'  
    },
    submitForm() {
      this.validateForm()
      if(!this.keyError && this.title && this.date && this.role && this.thumbnailImage && this.sourceFile) {
        this.$router.push('/explorer')
      }
      // Prepares the data to be sent to the server
      const formData = {
        authorizationKey: this.authorizationKey,
        title: this.title,
        description: this.description,
        tags: this.tags,
        date: this.date,
        role: this.role,
        thumbnailImage: this.thumbnailImage,
        sourceFile: this.sourceFile,
      };

      // Make the Axios API call to log the user input
      axios.post('https://jsonplaceholder.typicode.com/posts', formData)
        .then(response => {
          console.log('API response:', response.data);
          // Additional logic or redirection if required
        })
        .catch(error => {
          console.error('API error:', error);
          
        });
    },
    handleThumbnailImageUpload(event) {
      //  thumbnail image upload 
      this.thumbnailImage = event.target.files[0];
    },
    handleSourceFileUpload(event) {
      // source file upload 
      this.sourceFile = event.target.files[0];
    }
  },
}
</script>


<style scoped>
body {
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 0.8rem;
}

.form-body {
  background: #262e4c;
  border-radius: 15px;
  margin: 30px auto;
  opacity: 0.8;
  padding: 40px;
  position: relative;
  width: 80%;
  box-sizing: border-box;
  text-align: center;
}

.form-body h2,
.form-body h4 {
  color: white; 
  margin-bottom: 20px; 
}

.form-body h2 {
  margin-bottom: 40px;
  font-size: 1.5rem;
}

.custom-form {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.form-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.form-row .item {
  width: 48%;
  box-sizing: border-box;
}

.noFile {
  margin-top: 15px;
  color: white;
}

.file-upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 35px;
  border-radius: 5px;
  border: 2px solid #000000;
  padding: 8px;
  box-sizing: border-box;
  opacity: 0.5;
}

.file-upload-container input {
  display: none; 
  margin-right: 10px;
  margin-bottom: 10px;
}

.custom-file-input-label {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;;
  color: white;
}

.custom-file-input-label:hover {
  background-color: #192638;
}

label {
  color: #cec5c5;
  display: block;
  margin-bottom: 10px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  text-align: left;
}

input,
select {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  transition: border-color 0.3s ease;
  border: 2px solid #0000009e; 
  background-color: #262e4c;
  padding: 8px;
  box-sizing: border-box;
  color: white;
  cursor: pointer;
}

input:hover,
select:hover,
textarea:hover,
input:focus,
select:focus,
textarea:focus {
  border-color: #f98eb2;
  outline: none;
}

textarea {
  width: 100%;
  min-height: 118px;
  border-radius: 5px;
  border: 2px solid #000; 
  background-color: #262e4c; 
  padding: 8px;
  box-sizing: border-box;
  color: white;
}

/* CSS For Submit Button */
button {
  width: 50%;
  margin: 20px auto 0;
  padding: 10px;
  background: linear-gradient(to right, #f29bd4 , #f086a9, #e666ae);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  display: block; 
  margin-left: auto;
  margin-right: auto; 
}

button:hover {
  background: linear-gradient(to right, #f8719e , #f83b83, #e70058);
}

.error {
    color: #ff0000;
    margin-top: 10px;
    font-size: 0.8rem;
    font-weight: bold;
}

@media (max-width: 768px) {
  body {
    overflow-y: auto;
  }

  .form-row .item {
    width: 100%; 
    padding: 12px;
  }

  .container {
    height: auto;
  }

  .form-body {
    padding: 20px;
  }
}
</style>

