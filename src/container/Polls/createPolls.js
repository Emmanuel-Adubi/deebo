import React from 'react';
import '../../App.css';

function CreatePolls() {
  return (
    <div>
     <p class="text-center">Pro version <span class="text-danger">coming soon,</span>  signup to access more feature of our powerful tools</p>
<button class="btn btn-black text-white bg-fixed">
  + Add Questions<span class="badge"></span>
</button>
    <div class="full_page ">
      <div class="container">
        <div class="row mx-auto px-5" >
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                <h1 class="display-4"><b>New Polls</b></h1>
                <p>Free polls for non-members are limited to <span class="text-danger">3 option per polls</span> </p>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-12"></div>
        </div>
      </div>
        <div class="container mx-auto px-5">
        <div class="row  ">
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                    <label for="pollCat">Poll Category</label>
                    <select class="form-control" name="" id="">
                      <option value="green">Green</option>
                      <option value="blue">Blue</option>
                      <option value="red">Red</option>
                    </select>
                  </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                    <label for="pollCat">Poll Visiblity</label>
                    <select class="form-control" name="" id="">
                      <option value="green">Green</option>
                      <option value="blue">Blue</option>
                      <option value="red">Red</option>
                    </select>
                  </div>
            </div>
            </div>
          
        <div class="row ">
            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <label for="opt" class="small">Poll Options</label>
            </div>
        </div>
        <div class="row ">
          <div class="col-lg-3 col-md-3 col-sm-6 col-12">          
            <div class="wrap"><input class="bg-white p-4" type="checkbox" name="opt" id="opt"  value="m-opt"/>Allow multiple vote</div>
          </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-12">
              <div class="wrap"><input class="bg-white p-4" type="checkbox" name="opt" id="opt"  value="m-opt"/>Login to vote</div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-12">
              <div class="wrap"><input class="bg-white p-4" type="checkbox" name="opt" id="opt"  value="m-opt"/>Set end date</div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-12"><div class="wrap"><input class="bg-white p-4" type="checkbox" name="opt" id="opt"  value="m-opt"/>Allow sharing</div>
          </div>       
          </div>
          <div class="row py-3">
            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="form-group">
                <label for="qus">Poll Question 1</label>
                <textarea class="form-control" name="qus" id="qus" rows="3" placeholder="E.g What is your favourite color?"></textarea>
              </div>
            </div>
          </div>
          <form action="">
            <div class="row mt-3">
              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <label for="opt1">Poll Option 1</label>
              </div>
            </div>
          <div class="row">
            <div class="col-lg-10 col-md-10 col-sm-6 col-12">
              
              <input id="opt1" type="text" placeholder="E.g Green" name="opt1" class="form-control form-control-lg"/>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-6 col-12">
              <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">Add image</button>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
              <label for="opt1">Poll Option 2</label>
            </div>
          </div>
        <div class="row ">
          <div class="col-lg-10 col-md-10 col-sm-6 col-12">
            
            <input id="opt2" type="text" placeholder="E.g Green" name="opt2" class="form-control form-control-lg"/>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-6 col-12">
            <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">Add image</button>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <label for="opt3">Poll Option 3</label>
          </div>
        </div>
      <div class="row">
        <div class="col-lg-10 col-md-10 col-sm-6 col-12">
          
          <input id="opt3" type="text" placeholder="E.g Green" name="opt1" class="form-control form-control-lg"/>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-6 col-12">
          <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">Add image</button>
        </div>
      </div>
      <div class="row py-3">
        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
      <p>
        <a class="btn btn-outline-dark" data-toggle="collapse" href="#contentId" aria-expanded="false" aria-controls="contentId">
          Add option +
        </a>
      </p>
      <div class="collapse" id="contentId">
        Option 1
      </div>
    </div>
    </div>
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-12">
    
     <button type="button" class="btn btn-black btn-lg" data-toggle="modal" data-target="#modelId">
       Create Poll
     </button>
     
    
     <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
       <div class="modal-dialog" role="document">
         <div class="modal-content">
             <div class="modal-header">
                 <h5 class="modal-title">Ticket created Successfully</h5>
                   <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                   </button>
               </div>
           <div class="modal-body">
             <div class="container-fluid">
               <div class="row">
                 <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                   <form action="" class="form-group">
                     <input type="email" name="email" placeholder="Your email here" class="form-control"/>
                   </form>
                 </div>
                 <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                   <p class="small">You will be sent a link to monitor your poll as a <span class="text-danger">free user</span></p>
                 </div>
                 <div class="col-lg-4 col-md-4 col-sm-12 col-12"></div>
               </div>
              <hr/>
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-12 p-5">
                  <h1>Shareable link</h1>
                  <p>https://polls.deeboo/pokdkfkdj</p>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-12 p-5">
                  <h5>Share via:</h5>
                  <span>F</span>
                  <span>M</span>
                  <span>T</span>
                  <span>I</span>
                </div>
              </div>
             </div>
           </div>
           <div class="modal-footer">
             <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
             <button type="button" class="btn btn-primary">Save</button>
           </div>
         </div>
       </div>
     </div>
      </div>
    </div>
          </form>
        </div>
      </div>
    
    </div>
  );
}

export default CreatePolls;

