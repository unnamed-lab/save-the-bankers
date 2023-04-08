
{
    function calenderyear() {
    let date = new Date();
    let year = date.getFullYear();
    document.getElementById('dateyear').innerText = year;
    }
    calenderyear();
}

// {
//     let myscreen = screen.width;
//     let code = `<div id="service-web-detail" class="service-content"><div class="web-indicator"></div><div id="service-content-body" class="service-content-body"><div class="container"><div class="row"><div class="col-lg-7"><div class="content"><div class="content-header">Build your website now!</div><div class="content-subtitle">Be in control of your project.</div><div class="content-details">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, tenetur. Voluptatem, rem omnis nostrum vitae doloremque reiciendis ipsam molestiae necessitatibus?</div><a href="" class="service-btn light-black small rigid"><span>Build your website <i class="fa fa-globe"></i></span></a></div><div class="content-divider">- OR -</div><div class="content"><div class="content-subtitle">Get things done with templates!</div><div class="content-details">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, tenetur. Voluptatem, remomnis nostrum vitae doloremque reiciendis ipsam molestiae necessitatibus?</div><a href="./template.html" class="service-btn light-black small rigid"><span>View our templates</span></a></div></div><div class="col-lg-5"><img class="content-img" src="./assets/img/office-work.svg" ></div></div></div></div>`;
//     let servicelistID =document.getElementById('service-list')

//     window.onload = function() {servicelistID.innerHTML = code;}
//     window.onresize = function() {webServiceInfo()}
//     function webServiceInfo() {
//         if (myscreen >= 1080 ) {
//             console.log(screen.width + 'px');
//             servicelistID.innerHTML = code;
//         }
//         if (myscreen <= 1080) {
//             console.log(screen.width + 'px \nLower than 1080px');
//         }
//         else {
//             // document.getElementById('service-web-detail').remove()
//         }
//     }
// }

{
    function imageTimeChange() {
        let date = new Date();
        let time = date.getHours();
        let tempImg = document.getElementById('tempImg')

        if (time <= 19) {
            tempImg.innerHTML = `<img src="./assets/img/browser-white.png" alt="">`
        }
        else {
            tempImg.innerHTML = `<img src="./assets/img/browser-dark.png" alt="">`
        }
    }

    imageTimeChange();
}

// {
//     window.onscroll = function() {pageScroll()};

//     function pageScroll() {
//         if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 300) {
//             let arrowBtn = document.getElementById('fwdbtn');
//             arrowBtn.classList.add('disable')
//         }
//     }
// }

{
    var popup_code = `<div id="weblistpopup" class="service-popup guassian-bg">
            <div class="service-popup-body">
                <div class="card">
                    <div class="popup-header">
                        <h5>Website Development</h5>
                        <button id="popcancel" onclick="removePopup()" class="popup-cancel">
                            <i class="fa fa-remove"></i>
                        </button>
                    </div>
                    <div class="popup-body">
                        <div class="service-content">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-7">
                                        <div class="content">
                                            <div class="content-header">Build your website now!</div>
                                            <div class="content-subtitle">Be in control of your project.</div>
                                            <div class="content-details">Lorem ipsum dolor sit, amet consectetur adipisicing
                                                elit. Et,
                                                tenetur. Voluptatem, rem omnis nostrum vitae doloremque reiciendis ipsam
                                                molestiae
                                                necessitatibus?</div>
                                            <a href="" class="service-btn light-black small rigid">
                                                <span>Build your website <i class="fa fa-globe"></i></span>
                                            </a>
                                        </div>
        
                                        <div class="content-divider">- OR -</div>
        
                                        <div class="content">
                                            <div class="content-subtitle">Get things done with templates!</div>
                                            <div class="content-details">Lorem ipsum dolor sit, amet consectetur adipisicing
                                                elit. Et,
                                                tenetur. Voluptatem, rem
                                                omnis nostrum vitae doloremque reiciendis ipsam molestiae necessitatibus?
                                            </div>
                                            <a href="./template.html" class="service-btn light-black small rigid">
                                                <span>View our templates</span>
                                            </a>
                                        </div>
        
        
                                    </div>
                                    <div class="col-lg-5">
                                        <div class="content-img">
                                            <img src="./assets/img/office-work.svg">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`

    let webRedirectBtn = document.getElementById("web-redirect-btn");
    // let popupclosebtn = document.getElementById("popcancel");
    let workspace = document.getElementById('service-pop');
    // let popupbody = document.getElementById('weblistpopup');

    webRedirectBtn.onclick = function() {getPopup()};


    function getPopup() {
        if (workspace != null) {
            workspace.innerHTML = popup_code;
            // workspace.innerText = popup_code;
            console.log('Popup Created!')
        } else {
            console.log('Error!')
        }
    }

    function addText() {
        console.log('Button clicked')
    }

    function removePopup() {
        console.log("Cancel Clicked")
        workspace.remove();
        console.log(workspace)
        console.log('Element Deleted!')
        document.getElementById('service-worksheet').innerHTML = `<div id="service-pop"></div>`
        console.log("New 'sevice-pop' id element added!")
    }



}


// {
//     for (let i = 1; i < 4; i++) {
//     let serviceItem = document.getElementById(`service-info-${i}`);
//     serviceItem.onmouseover = function() {showDetail(serviceItem)};
//     serviceItem.onmouseout = function() {showDetail(serviceItem)};
//     }
//     function showDetail(item) {
//         console.log("Item Hover!");
//         console.log(item)
//         item.classList.toggle('inactive');
//     }
// }

