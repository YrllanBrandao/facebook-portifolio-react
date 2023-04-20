import React, {useContext, useState} from "react";
import { Icon } from "@iconify/react";
import { SharedMessageState } from "../App";

const  Message =() =>
{
    const {showMessage, showOrHide} = useContext(SharedMessageState)

    function form()
    {
        return(<>
            <form action="https://formsubmit.co/yrllanbrandao@outlook.com" class="message-form form-control bg-dark-2  d-flex flex-column gap-2" method="post">
                    <div className='d-flex container-fluid justify-content-between form-top align-item-center'>
                      <h1 className="fs-6 form-title">New Message</h1>
                    <a className='btn-close-box' onClick={() => showOrHide(false)}>
                        <Icon icon="ic:round-close" color="#2e89ff" width="24" height="24"  />
                        </a>
                    </div>
                      <div className='form-body'>
                      <div class="form-floating">
                            <input type="text" name="name" id="name" class="form-control" required=""/>
                            <label for="name">Name</label>
                        </div>
                        <div class="form-floating">
                            <input type="text" name="lastName" id="lastName"  class="form-control"/>
                            <label for="lastName">Last name</label>
                        </div>
                        <div class="form-floating">
                            <input type="email" name="email" id='email' max="11" required="" pattern="(.+)@(\w+).(\w+)" class="form-control"/>
                            <label for="email">E-mail</label>
                        </div>
                        <div class="d-flex align-items-center"> 
                            <input type="text" name="text" max="11" required="" class="form-control input-message" placeholder="Aa"/>
                            <button type="submit" class=" btn-send ">
                            <Icon icon="ic:round-send" color="#0084ff" width="30" height="30" />
                            </button>
                        </div>
                      </div>
          
                       
                    </form>
              
            </>)
        }
        
        return(<>
        { showMessage ? form() : null}
        </>)
}

export default Message;