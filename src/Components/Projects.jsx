import { HiOutlineArrowUpRight } from "react-icons/hi2";

function Projects() {
  const projects = [
    {
      image: "/projects/lovotale.png",
      title: "Lovotale",
      subtitle:
        "Multi-Vendor Event & Wedding Planning Platform with Vendor Listings, Reviews, Wishlist, and Subscription Management.",
      link: "https://lovotale.com/",
    },
    {
      image: "/projects/ableproff.png",
      title: "Ableproff",
      subtitle:
        "B2B E-Commerce Platform for Cleaning Products featuring Dynamic Pricing, Bulk Orders, and Retailer Management.",
      link: "https://ableproff.com/",
    },
    {
      image: "/projects/dira.png",
      title: "Dira",
      subtitle:
        "Modern Fashion E-Commerce Website with Product Catalog, Category Management, Shopping Cart, and Responsive UI.",
      link: "https://diraindia.com/",
    },
    {
      image: "/projects/homeats.png",
      title: "Homeats",
      subtitle:
        "Home-Cooked Food Delivery Platform connecting customers with local food providers through seamless online ordering.",
      link: "https://homeats.in/",
    },
  ];

  return (
    <section className="bg-[#161313] py-10">
      <div className="max-w-7xl mx-auto px-0 md:px-3 lg:px-5">
        {/* Heading */}
        <div className="mb-20 headline_proj">
          <h2 className="text-white uppercase font-black leading-10 lg:leading-none tracking-tight
          text-3xl sm:text-7xl md:text-8xl lg:text-[6rem]">
            RECENT
          </h2>

          <h2 className="font-black uppercase leading-none tracking-tight
          text-[#363233]
          text-4xl sm:text-7xl md:text-8xl lg:text-[7rem]">
            PROJECTS
          </h2>
        </div>

        {/* Project List */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <a
              target="_blank"
              href={project.link}
              key={index}
              className="group flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#2b2727] pb-8"
            >
              {/* Left */}
              <div className="flex flex-row sm:flex-row md:flex-row lg:flex-row items-center sm:items-center lg:items-center gap-4 md:gap-4 lg:gap-6">
                <div className=" mob_img_cont w-[50%] md:w-[50%] lg:w-[40%] sm:w-[220px] h-[170px] overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-left transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div>
                  <h3 className="text-white text-2xl md:text-4xl lg:text-3xl font-bold">
                    {project.title}
                  </h3>

                  <p className="text-gray-500 text-sm md:text-lg lg:text-lg mt-2">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="Arrow_icon">
                <HiOutlineArrowUpRight
                  size={34}
                  className="text-[#F46C38] transition duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
