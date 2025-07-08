import img from "../../assets/unnamed.jpg";
import "../../styles/contact.scss";

const ContactPage = () => {
  return (
    <>
      <main>
        <div className="w-100 h-100 bg-black flex justify-center pt-3">
          <div className="container">
            {/* <section className="container-info">
              <div className="image-container">
                <img
                  loading="lazy"
                  src={img}
                  alt="Portrait of Vlastimir Ilić in studio setting"
                  className="image"
                />
              </div>
              <section className="ml-2 font-10 text-white flex flex-column justify-center info">
                <div>
                  <p className="text-gray">Email:</p>
                  <p className="mt-1">dusan.ilic1999@gmail.com</p>
                </div>
                <div>
                  <p className="text-gray">Social media:</p>
                  <div>
                    <div>
                      <a
                        href="https://github.com/zvoosh"
                        className="mt-1 text-white"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        Github
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.linkedin.com/in/dusan-ilic-0997b4166/"
                        className="mt-1 text-white"
                        style={{ textDecoration: "none" }}
                      >
                        Linkedin
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </section> */}
            <section className="mt-1 mr-1 ml-1" style={{textAlign: "justify"}}>
              <p className="text-gray line-spacing-11 font-12 pb-1 normal-text">
                Dusan Ilic is a Software Engineer based in Belgrade, Serbia,
                with a degree in Informatics from the Faculty of Computer
                Science at the University of Singidunum, where he studied from
                October 2018 to March 2024. He previously attended "Sveti Sava"
                High School from 2014 to 2018, and earlier completed elementary
                education at "Vladislav Ribnikar" from 2006 to 2014.
              </p>
              <p className="text-gray line-spacing-11 font-12 pb-1 normal-text">
                Driven by a passion for web development, Dusan has cultivated
                skills in React, Next.js, Angular, Flask, Node.js, TypeScript,
                CSS, Ant Design, and Git. During his third year of university,
                he gained professional experience as a Software Engineer 1 at
                Factory Worldwide, where he worked from July 2022 to June 2023.
                In this role, Dusan contributed to two key frontend projects,
                utilizing React.js and TypeScript. He worked with libraries such
                as Axios, React Query, React Context, Redux, React Router, and
                Ant Design, and ensured code quality with Jest.js testing.
              </p>
              <p className="text-gray line-spacing-11 font-12 pb-1 normal-text">
                Outside of software development, Dusan has held various
                part-time positions since 2015, including roles in
                administrative assistance, database maintenance, commercial
                modeling, TV production assistance, and barista work. These
                experiences have contributed to his versatile skill set,
                adaptability, and communication.
              </p>
              <p className="text-gray line-spacing-11 font-12 pb-1 normal-text">
                Dusan is fluent in English at an advanced level and has beginner
                proficiency in French. He holds a B-category driver’s license
                and has completed certificate courses on React and Flask REST
                API through Udemy. His dedication and growth mindset are backed
                by a strong reference from Rastko Ilic, CEO of Factory
                Worldwide.
              </p>
              <p className="text-gray line-spacing-11 font-12 pb-1 normal-text">
                For contact, Dusan can be reached at dusan.ilic1999@gmail.com or
                by phone at +381 60 3311553. His LinkedIn profile is available
                at linkedin.com/in/dusan-ilic-0997b4166, and his GitHub projects
                can be found at github.com/zvoosh. He resides in Belgrade,
                Vračar, at Resavska 8.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};
export { ContactPage };
