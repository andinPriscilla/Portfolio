import React from 'react'
import blackgirl from "../../images/blackgirl.jpeg";
import blackgirl3 from "../../images/blackgirl3.jpeg"
import "./Home.css"

function Home() {
    return (

        <main class="container">

        {/* <!-- the first div --> */}
                <div className=" container intro" id="home">
                    <div className="firstintro">
                        <h1>Hello, I am <strong>Priscilla</strong></h1>
                        <h2 className="front">Front-end Developer</h2>
                        <p>
                        It's all about problems and Solutions.Just don't think come for it.
                        Innovation is my passion
                        </p>
                    </div>
                    <div className="secondintro">
                        <div className="wrapper">
                            <div className="imgtop1">Developer</div>
                            <img src={blackgirl} alt="" width="300px" className="img1" />
                            <div className="imgtop2">Designer</div>
                        </div>
                    </div>
                </div>

{/* <!-- second div --> */}

                <div className=" container second" id="work">
             {/* <div className="background">  */}
                    <div className="color">
                        <div className="section-content">
                             <h2 className="mywork">What I Do</h2>

                            <div className="section-columns">
                                <section className="secondtop">
                                    <h3>UI/UX DESIGN</h3>
                                    <p>
                                            UI/UX involves planning and iterating a site's structure and
                                            layout. Once the proper information architecture is in
                                            place, I design the visual layer to create a beautiful user
                                            experience.
                                     </p>
                                     <p>
                                            <script
                                            src="https://kit.fontawesome.com/cf222bd61a.js"
                                            crossorigin="anonymous"
                                            ></script> Front End Development is building out the visual componentsof a website. Using HTML, CSS , and Javascript, I buildfast, interactive websites.
                                    </p>
                                </section>
                                <section className="secondtop">
                                    <h3>FRONT-END DEVELOPMENT</h3>
                                    <p>Front End Development is building out the visual components of a website. Using HTML, CSS , and Javascript, I build fast, interactive websites. </p>
                                </section>

                                <section className="secondtop">
                                    <h3>WORDPRESS</h3>
                                    <p>
                                    WordPress (WP, WordPress.org) is a free and open-source content management system (CMS) written in PHP[4] and paired with a MySQL or MariaDB database. Features include a plugin architecture and a template system, referred to within WordPress as Themes. 
                                    </p>
                                </section>
                             </div>
                            <div className="button1">

                                <div className="labels">
                                    <label for="html">HTML</label>
                                    <label for="css">CSS</label>
                                    <label for="git">GIT</label>
                                 </div>
                                 <input  type="radio" name="button" value="html" id="html" />
                        

          
                                <p>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.</p>
       
        
                                <input type="radio" name="button" value="css" id="css" />
                                <p>CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.[3] This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file which reduces complexity and repetition in the structural content as well as enabling the .css file to be cached to improve the page load speed between the pages that share the file and its formatting.
                                </p>
                                
        
                                <input type="radio" name="button" value="git" id="git" />
                                <p>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows (thousands of parallel branches running on different systems).
                                </p>
                                
                            </div>
                        </div>
                    </div>
  {/* <!-- </div> --> */}
                </div>

    {/* <!-- third section --> */}

                <div className="container third" id="about">
                     <h2 className="myself">Who I am</h2>
  
                    <div className="threediv">
                        <h3 className="myself1">Front-end Developer based in German</h3>


  
                        <p className="third-p">
                            Hello I'am Priscilla. I was born in Cameroon and presently leaving
                            in Germany. Presently I'am studying Web Development at Digital
                            Career Institute (DCI) Germany. I specialize in UI and UX design and
                            also in creating interactive experiences and functional interfaces
                            using HTML and CSS.
                        </p>


                        <img
                        src={blackgirl3}
                        alt=""
                        width="400px"
                        className="third-img"
                        />
                    </div>
                </div>

     {/* <!-- Fourth section --> */}
                <div>
                    <div className="container galary" id="galary">
                        <div className="galdiv">
                            <h2 className="gal1">My Work</h2>
                            <p>These are some pictures of my work</p>
                        </div>

                        <div className="images">
                            <div>
                                <img src="../../images/img/complete.png" alt="" className="imglast" />
                            </div>
                            <img src="../../images/img/example_task2.png" alt="" className="imglast" />
                            <div>
                                <img src="../../images/img/example.png" alt="" className="imglast" />
                            </div>
                        <div>
                            <img
                            src="../../images/img/grid2-reference.png"
                            alt=""
                            className="imglast"
                            />
                        </div>
                        <div>
                            <img src="../../images/img/mockup.png" alt="" className="imglast" />
                        </div>
                        <div>
                            <img src="../../images/img/mockup2.png" alt="" className="imglast" />
                        </div>
                        <div>
                            <img src="../../images/img/NNP.png" alt="" className="imglast" />
                        </div>
                        <div>
          </div>
                        <div>
                            <img
                            src="../../images/img/reference-image2.png"
                            alt=""
                            className="imglast"
                            />
                        </div>
                        <div>
                            <img src="../../images/img/reference.png" alt="" className="imglast" />
                        </div>
                        <div>
                            <img src="../../images/img/result-1.png" alt="" className="imglast" />
                        </div>
                        <div>
                            <img src="../../images/img/result.png" alt="" className="imglast" />
                        </div>
                    </div>
                </div>
            </div>
        </main>


    )
}

export default Home
