function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Deiondrae Small
            <br className="hidden lg:inline-block"></br>
            Fullstack Dev
          </h1>
          <p className="mb-8 leading-relaxed">
            Full Stack Developer looking to leverage my background in psychology
            to build more intuitive user experiences on the web. Certificate in
            Web Development from the University of Toronto with experience in
            full stack - MERN (MongoDb, Express, React and Node.js). Quick study
            and an adept and capable problem-solver with a keen eye for
            opportunities to improve user experience. Extremely open minded and
            excited to join a fast-paced team that will allow me to build on my
            fundamentals and grow. <br></br>I am currently looking for work as a
            front-end, back-end or fullstack dev. I am also open to non dev
            roles.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Contact me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              View my work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="../../logo.svg"
          ></img>
        </div>
      </div>
    </section>
  );
}
export default About;
