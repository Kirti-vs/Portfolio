import React from "react";
import ProfileAside from "../Components/ProfileAside";
import Contact from "../Components/Contact";
import Skills from "../Components/Skills";

function Tools() {
  return (
    <div>
      <main>
        <div className="main_container">
          <div className=" main_sub_cont grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[380px_1fr] gap-8">
            <aside>
              <div className="aside_contain sticky ">
                <ProfileAside />
              </div>
            </aside>

            <aside>
              <div className="home_main_section">
                <section>
                  <Skills />
                </section>

                <section>
                  <Contact />
                </section>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Tools;
