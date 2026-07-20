function Contact() {
  return (
    <section className="bg-[#161313] py-0 md:py-10 lg:py-10">
      <div className="max-w-6xl mx-auto px-0 md:px-3 lg:px-5">
        {/* Heading */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <h2
            className="text-white uppercase font-black leading-none tracking-tight
            text-4xl sm:text-7xl md:text-8xl lg:text-[7rem]"
          >
            LET'S WORK
          </h2>

          <h2
            className="text-[#363233] uppercase font-black leading-none tracking-tight
            text-4xl sm:text-7xl md:text-8xl lg:text-[7rem]"
          >
            TOGETHER
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-8">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-400 mb-2 md:mb-2 lg:mb-3">
                Name
              </label>

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#373334] rounded-2xl py-3 px-3 md:px-4 md:py-3 lg:px-5 lg:py-4 text-white outline-none border border-transparent focus:border-[#F46C38]"
                required
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2 md:mb-2 lg:mb-3">
                Email
              </label>

              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-[#373334] rounded-2xl py-3 px-3 md:px-4 md:py-3 lg:px-5 lg:py-4 text-white outline-none border border-transparent focus:border-[#F46C38]"
                required
              />
            </div>
          </div>

          {/* Service */}
          <div>
            <label className="block text-gray-400 mb-2 md:mb-2 lg:mb-3">
              Service Required
            </label>

            <select
              className="w-full bg-[#373334] rounded-2xl py-3 px-3 md:px-4 md:py-3 lg:px-5 lg:py-4 text-gray-300 outline-none border border-transparent focus:border-[#F46C38]"
              required
            >

              <option value="" disabled selected>Select Service</option>
              <option value="React Development">React Development</option>
              <option value="Frontend Development">Frontend Development</option>
              <option value="Full Stack Development">
                Full Stack Development
              </option>
              <option value="Website Design">Website Design</option>
              <option value="E-Commerce Website">E-Commerce Website</option>
            </select>
          </div>

          {/* Message */}
          <div className="mb-5 md:mb-auto lg:mb-auto">
            <label className="block text-gray-400 mb-2 md:mb-2 lg:mb-3">
              Message
            </label>

            <textarea
              rows="6"
              placeholder="Tell me about your project..."
              className="w-full bg-[#373334] rounded-2xl py-3 px-3 md:px-4 md:py-3 lg:px-5 lg:py-4 text-white outline-none resize-none border border-transparent focus:border-[#F46C38]"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#F46C38] hover:bg-[#ff7a4a] text-white mt-5 font-bold text-base md:text-lg lg:text-lg py-3 md:py-3 lg:py-4 rounded-2xl transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
