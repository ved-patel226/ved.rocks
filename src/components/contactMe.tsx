function ContactMe() {
  return (
    <div className="mockup-browser bg-base-300 border m-10 mt-20 shadow-lg rounded-lg">
      <div className="mockup-browser-toolbar flex items-center">
        <div className="flex-grow input font-semibold text-gray-700">
          https://ved.rocks
        </div>
      </div>

      <div className="bg-base-200 px-6 py-16">
        <div className="flex flex-col items-center justify-center h-[50vh]">
          <h1 className="text-2xl font-bold text-center mb-4">
            Since you're already here...
          </h1>
          <h2 className="text-xl text-center mb-6">
            Why not drop me a message?
          </h2>

          <a
            className="btn btn-outline"
            href="mailto:talk2ved11@gmail.com?subject=Hi%20super%20awesome%20person!%20I%20want%20to%20contact%20you%20about%20..."
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
