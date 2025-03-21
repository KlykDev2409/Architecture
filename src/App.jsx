import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';

import './css/style-cleaner.css'
import './css/style.css'
import './css/mobile-style.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(()=>{
      console.log('Hello')
  }, [])

  useEffect(()=>{
    console.log('isModalOpen', isModalOpen)
  }, [isModalOpen])

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <div className="container">
        <section className="hero-section">
            <div className="header">
                <div className="logo">
                    <svg width="144" height="31" viewBox="0 0 144 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.8864 8.29545H17.3409C17.2045 7.53788 16.9508 6.87121 16.5795 6.29545C16.2083 5.7197 15.7538 5.23106 15.2159 4.82954C14.678 4.42803 14.0758 4.125 13.4091 3.92045C12.75 3.71591 12.0492 3.61364 11.3068 3.61364C9.96591 3.61364 8.76515 3.95076 7.70455 4.625C6.65152 5.29924 5.81818 6.28788 5.20455 7.59091C4.59848 8.89394 4.29545 10.4848 4.29545 12.3636C4.29545 14.2576 4.59848 15.8561 5.20455 17.1591C5.81818 18.4621 6.6553 19.447 7.71591 20.1136C8.77652 20.7803 9.9697 21.1136 11.2955 21.1136C12.0303 21.1136 12.7273 21.0152 13.3864 20.8182C14.053 20.6136 14.6553 20.3144 15.1932 19.9205C15.7311 19.5265 16.1856 19.0455 16.5568 18.4773C16.9356 17.9015 17.197 17.2424 17.3409 16.5L20.8864 16.5114C20.697 17.6553 20.3295 18.7083 19.7841 19.6705C19.2462 20.625 18.553 21.4508 17.7045 22.1477C16.8636 22.8371 15.9015 23.3712 14.8182 23.75C13.7348 24.1288 12.553 24.3182 11.2727 24.3182C9.25758 24.3182 7.46212 23.8409 5.88636 22.8864C4.31061 21.9242 3.06818 20.5492 2.15909 18.7614C1.25758 16.9735 0.806818 14.8409 0.806818 12.3636C0.806818 9.87879 1.26136 7.74621 2.17045 5.96591C3.07955 4.17803 4.32197 2.80682 5.89773 1.85227C7.47349 0.890151 9.26515 0.40909 11.2727 0.40909C12.5076 0.40909 13.6591 0.587121 14.7273 0.943182C15.803 1.29167 16.7689 1.80682 17.625 2.48864C18.4811 3.16288 19.1894 3.98864 19.75 4.96591C20.3106 5.93561 20.6894 7.04545 20.8864 8.29545ZM32.1676 24.3523C30.5313 24.3523 29.1032 23.9773 27.8835 23.2273C26.6638 22.4773 25.7169 21.428 25.0426 20.0795C24.3684 18.7311 24.0312 17.1553 24.0312 15.3523C24.0312 13.5417 24.3684 11.9583 25.0426 10.6023C25.7169 9.24621 26.6638 8.19318 27.8835 7.44318C29.1032 6.69318 30.5313 6.31818 32.1676 6.31818C33.804 6.31818 35.232 6.69318 36.4517 7.44318C37.6714 8.19318 38.6184 9.24621 39.2926 10.6023C39.9669 11.9583 40.304 13.5417 40.304 15.3523C40.304 17.1553 39.9669 18.7311 39.2926 20.0795C38.6184 21.428 37.6714 22.4773 36.4517 23.2273C35.232 23.9773 33.804 24.3523 32.1676 24.3523ZM32.179 21.5C33.2396 21.5 34.1184 21.2197 34.8153 20.6591C35.5123 20.0985 36.0275 19.3523 36.3608 18.4205C36.7017 17.4886 36.8722 16.4621 36.8722 15.3409C36.8722 14.2273 36.7017 13.2045 36.3608 12.2727C36.0275 11.3333 35.5123 10.5795 34.8153 10.0114C34.1184 9.44318 33.2396 9.15909 32.179 9.15909C31.1108 9.15909 30.2244 9.44318 29.5199 10.0114C28.8229 10.5795 28.304 11.3333 27.9631 12.2727C27.6297 13.2045 27.4631 14.2273 27.4631 15.3409C27.4631 16.4621 27.6297 17.4886 27.9631 18.4205C28.304 19.3523 28.8229 20.0985 29.5199 20.6591C30.2244 21.2197 31.1108 21.5 32.179 21.5ZM44.0966 24V6.54545H47.358V9.38636H47.5739C47.9375 8.42424 48.5322 7.67424 49.358 7.13636C50.1837 6.59091 51.1723 6.31818 52.3239 6.31818C53.4905 6.31818 54.4678 6.59091 55.2557 7.13636C56.0511 7.68182 56.6383 8.43182 57.017 9.38636H57.1989C57.6155 8.45455 58.2784 7.71212 59.1875 7.15909C60.0966 6.59848 61.1799 6.31818 62.4375 6.31818C64.0208 6.31818 65.3125 6.81439 66.3125 7.80682C67.3201 8.79924 67.8239 10.2955 67.8239 12.2955V24H64.4261V12.6136C64.4261 11.4318 64.1042 10.5758 63.4602 10.0455C62.8163 9.51515 62.0473 9.25 61.1534 9.25C60.0473 9.25 59.1875 9.59091 58.5739 10.2727C57.9602 10.947 57.6534 11.8144 57.6534 12.875V24H54.267V12.3977C54.267 11.4508 53.9716 10.6894 53.3807 10.1136C52.7898 9.53788 52.0208 9.25 51.0739 9.25C50.4299 9.25 49.8352 9.42045 49.2898 9.76136C48.7519 10.0947 48.3163 10.5606 47.983 11.1591C47.6572 11.7576 47.4943 12.4508 47.4943 13.2386V24H44.0966ZM72.3778 30.5455V6.54545H75.696V9.375H75.9801C76.1771 9.01136 76.4612 8.59091 76.8324 8.11364C77.2036 7.63636 77.7188 7.2197 78.3778 6.86364C79.0369 6.5 79.9081 6.31818 80.9915 6.31818C82.4006 6.31818 83.6581 6.67424 84.7642 7.38636C85.8703 8.09848 86.7377 9.125 87.3665 10.4659C88.0028 11.8068 88.321 13.4205 88.321 15.3068C88.321 17.1932 88.0066 18.8106 87.3778 20.1591C86.7491 21.5 85.8854 22.5341 84.7869 23.2614C83.6884 23.9811 82.4347 24.3409 81.0256 24.3409C79.965 24.3409 79.0975 24.1629 78.4233 23.8068C77.7566 23.4508 77.2339 23.0341 76.8551 22.5568C76.4763 22.0795 76.1847 21.6553 75.9801 21.2841H75.7756V30.5455H72.3778ZM75.7074 15.2727C75.7074 16.5 75.8854 17.5758 76.2415 18.5C76.5975 19.4242 77.1127 20.1477 77.7869 20.6705C78.4612 21.1856 79.2869 21.4432 80.2642 21.4432C81.2794 21.4432 82.1278 21.1742 82.8097 20.6364C83.4915 20.0909 84.0066 19.3523 84.3551 18.4205C84.7112 17.4886 84.8892 16.4394 84.8892 15.2727C84.8892 14.1212 84.715 13.0871 84.3665 12.1705C84.0256 11.2538 83.5104 10.5303 82.821 10C82.1392 9.4697 81.2869 9.20455 80.2642 9.20455C79.2794 9.20455 78.446 9.45833 77.7642 9.96591C77.09 10.4735 76.5786 11.1818 76.2301 12.0909C75.8816 13 75.7074 14.0606 75.7074 15.2727ZM97.2074 24.3864C96.1013 24.3864 95.1013 24.1818 94.2074 23.7727C93.3134 23.3561 92.6051 22.7538 92.0824 21.9659C91.5672 21.178 91.3097 20.2121 91.3097 19.0682C91.3097 18.0833 91.4991 17.2727 91.8778 16.6364C92.2566 16 92.768 15.4962 93.4119 15.125C94.0559 14.7538 94.7756 14.4735 95.571 14.2841C96.3665 14.0947 97.1771 13.9508 98.0028 13.8523C99.0483 13.7311 99.8968 13.6326 100.548 13.5568C101.2 13.4735 101.673 13.3409 101.969 13.1591C102.264 12.9773 102.412 12.6818 102.412 12.2727V12.1932C102.412 11.2008 102.132 10.4318 101.571 9.88636C101.018 9.34091 100.192 9.06818 99.0938 9.06818C97.9498 9.06818 97.0483 9.32197 96.3892 9.82955C95.7377 10.3295 95.2869 10.8864 95.0369 11.5L91.8438 10.7727C92.2225 9.71212 92.7756 8.85606 93.5028 8.20455C94.2377 7.54545 95.0824 7.06818 96.0369 6.77273C96.9915 6.4697 97.9953 6.31818 99.0483 6.31818C99.7453 6.31818 100.484 6.40152 101.264 6.56818C102.052 6.72727 102.787 7.02273 103.469 7.45454C104.158 7.88636 104.723 8.50379 105.162 9.30682C105.601 10.1023 105.821 11.1364 105.821 12.4091V24H102.503V21.6136H102.366C102.147 22.053 101.817 22.4848 101.378 22.9091C100.938 23.3333 100.374 23.6856 99.6847 23.9659C98.9953 24.2462 98.1695 24.3864 97.2074 24.3864ZM97.946 21.6591C98.8854 21.6591 99.6884 21.4735 100.355 21.1023C101.029 20.7311 101.541 20.2462 101.889 19.6477C102.245 19.0417 102.423 18.3939 102.423 17.7045V15.4545C102.302 15.5758 102.067 15.6894 101.719 15.7955C101.378 15.8939 100.988 15.9811 100.548 16.0568C100.109 16.125 99.6809 16.1894 99.2642 16.25C98.8475 16.303 98.4991 16.3485 98.2188 16.3864C97.5597 16.4697 96.9574 16.6098 96.4119 16.8068C95.8741 17.0038 95.4422 17.2879 95.1165 17.6591C94.7983 18.0227 94.6392 18.5076 94.6392 19.1136C94.6392 19.9545 94.9498 20.5909 95.571 21.0227C96.1922 21.447 96.9839 21.6591 97.946 21.6591ZM113.744 13.6364V24H110.347V6.54545H113.608V9.38636H113.824C114.225 8.46212 114.854 7.7197 115.71 7.15909C116.574 6.59848 117.661 6.31818 118.972 6.31818C120.161 6.31818 121.203 6.56818 122.097 7.06818C122.991 7.56061 123.684 8.29545 124.176 9.27273C124.669 10.25 124.915 11.4583 124.915 12.8977V24H121.517V13.3068C121.517 12.0417 121.188 11.053 120.528 10.3409C119.869 9.62121 118.964 9.26136 117.812 9.26136C117.025 9.26136 116.324 9.43182 115.71 9.77273C115.104 10.1136 114.623 10.6136 114.267 11.2727C113.919 11.9242 113.744 12.7121 113.744 13.6364ZM130.994 30.5455C130.487 30.5455 130.025 30.5038 129.608 30.4205C129.191 30.3447 128.881 30.2614 128.676 30.1705L129.494 27.3864C130.116 27.553 130.669 27.625 131.153 27.6023C131.638 27.5795 132.066 27.3977 132.438 27.0568C132.816 26.7159 133.15 26.1591 133.438 25.3864L133.858 24.2273L127.472 6.54545H131.108L135.528 20.0909H135.71L140.131 6.54545H143.778L136.585 26.3295C136.252 27.2386 135.828 28.0076 135.312 28.6364C134.797 29.2727 134.184 29.75 133.472 30.0682C132.759 30.3864 131.934 30.5455 130.994 30.5455Z"
                            fill="white" />
                    </svg>
                </div>
                <div className="nav">
                    <ul className="header-menu">
                        <li className="header_items_svg"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.7666" cy="11.7666" r="8.98856" stroke="white" strokeWidth="1.5"
                                    strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18.0183 18.4851L21.5423 22" stroke="white" strokeWidth="1.5"
                                    strokeLinecap="round" strokeLinejoin="round" />
                            </svg></li>
                        <li className="header_items"><a href="#">Portfolio</a></li>
                        <li className="header_items"><a href="#">Team</a></li>
                        <li className="header_items"><a href="#">About</a></li>
                        <li className="header_items"><a href="#">Blog</a></li>
                        <li className="header_items"><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="hero-text-content">
                <h1>We produce <br></br> the best products</h1>
                <p>Mattis quam, lectus et justo amet, tortor, lectus dapibus est. Habitasse efficitur sodales vel est.
                </p>
                <Button className="button" type="primary" onClick={showModal}>
                    <a href="#">Button</a>
                </Button>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
            </div>

        </section>
        <div className="main">
            <section className="numbers">

                <div className="num_block">
                    <h4>20,000</h4>
                    <p>completed projects</p>
                </div>
                <div className="num_block">
                    <h4>10,000</h4>
                    <p>prototypes</p>
                </div>
                <div className="num_block">
                    <h4>347</h4>
                    <p>completed projects</p>
                </div>
            </section>
            <section>
                <div className="text-for_numbers">
                    <p className="big-text">
                        Amet, mattis dapibus malesuada arcu dapibus nec efficitur et dictum. In sit odio. Tempus leo,
                        dictum.
                    </p>
                    <p>
                        Amet, mattis dapibus malesuada arcu dapibus nec efficitur et dictum. In sit odio.
                        Tempus leo, dictum. Sit mattis mattis lorem cursus velit sit sed et vitae quam, sed nulla
                        dapibus venenatis odio.
                        <br></br>
                        <br></br>
                        Venenatis sapien aenean adipiscing lacinia nec lacinia lacinia et quam, ultricies. Dictum.
                        Ipsum sodales sit id nec sed sodales mattis mollis quis, pellentesque habitasse ex.
                    </p>
                </div>
            </section>
            <section className="video_cover">
                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/GJ0Hn4ywOlY?si=pY_m6Ry5m1Se6uS2"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFulScreen>
                </iframe> */}
            </section>
            <section className="article">
                <h3>Et odio</h3>
                <p>
                    Mauris eget nec nulla dolor ex. Sodales luctus pellentesque cras ornare lorem luctus lectus sed
                    consectetur quam, est. Libero, odi
                </p>
                <div className="button"><a href="#">Button</a></div>
            </section>
            <section article_img>
                <img src="../public/img/article_1.jpg" alt=""/>
            </section>
            <section first_img>
                <img  src="../public/img/article_2.jpg" alt=""/>
            </section>
            <section className="article">
                <h3>Integer dapibus dictum</h3>
                <p>
                    it pulvinar tempus amet dolor dui vulputate tortor, luctus lorem in nunc eleifend ipsum justo et
                    venenatis dictumst.
                </p>
                <div className="button"><a href="#">Button</a></div>
            </section>
            <section className="founder_info">
                <p>Quoute</p>
                <div className="quote">
                    Accumsan vulputate efficitur in amet, vestibulum ornare morbi accumsan leo, est.
                    Consectetur ultricies. Sapien est. Dictumst. Sapien habitasse interdum in amet, lectus molestie vel
                    ut.
                    Malesuada efficitur mattis id mattis aenean interdum lectus quam, dapibus nec augue vulputate leo,
                    ornare elit.
                </div>
                <cite>
                    Alex Lee / <span> Co-founder & SEO</span>
                </cite>
            </section>

        </div>
        <div className="slider"></div>
        <div className="servises">
            <table>
                <tr>
                    <td>
                        <h2>Branding</h2>
                    </td>
                    <td className="right">Quam, tortor, interdum consectetur eleifend integer et. Accumsan vulputate
                        efficitur in amet, vestibulum ornare morbi accumsan leo, est. Consectetur ultricies.</td>
                </tr>
                <tr>
                    <td>
                        <h2>Web-apps</h2>
                    </td>
                    <td className="right">Malesuada efficitur mattis id mattis aenean interdum lectus quam, dapibus nec
                        augue vulputate leo, ornare elit. Pulvinar sed quam, arcu pulvinar nisi ipsum quis, sodales
                        molestie ex.</td>
                </tr>
                <tr>
                    <td>
                        <h2>Design</h2>
                    </td>
                    <td className="right">Cras amet, sed sapien orci, leo, sit ornare risus tortor, ex. Mauris non orci, sed
                        elit. Cursus ex. Aenean ipsum dolor augue tempus et molestie ipsum adipiscing leo, sit interdum
                        venenatis odio.</td>
                </tr>
                <tr>
                    <td>
                        <h2>Strategy</h2>
                    </td>
                    <td className="right">Quam, tortor, interdum consectetur eleifend integer et. Accumsan vulputate
                        efficitur in amet, vestibulum ornare morbi accumsan leo, est. Consectetur ultricies.</td>
                </tr>
            </table>
        </div>
        <div className="footer">
            <div className="footer_grid">
                <section>
                    <h2>Company</h2>
                    <p>Dorivit BV, Monitorweg 1, Almere 1322BJ, Netherlands</p>
                    <img src="../public/img/facebook.png" alt=""/>
                    <img src="../public/img/telegram.png" alt=""/>
                    <img src="../public/img/google.png" alt=""/>
                </section>
                <section>
                    <h2>Id sodales interdum dui mollis non in odio</h2>
                    <form action="" method="post">
                        <input type="text" id="mail" name="mail" placeholder="E-MAIL"/>
                    </form>

                </section>
            </div>
        </div>
    </div>
    </>
  )
}

export default App
