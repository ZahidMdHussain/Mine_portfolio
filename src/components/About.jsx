import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="h-screen w-full bg-gradient-to-b from-gray-800 via-black to-black pt-24 pb-8 md:pt-0 md:pb-0"
    >
      <div className="flex justify-center mx-auto max-w-screen-lg flex-col text-white w-full h-full px-4">
        <div className="my-8 py-1 w-fit">
          <h1 className="text-4xl font-bold border-b-4 border-gray-600">
            About
          </h1>
        </div>
        <p className="md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam in sint
          itaque inventore rem laborum distinctio natus velit, reiciendis magni
          accusamus delectus tenetur aliquam voluptas tempore molestias
          consequatur eveniet placeat. Asperiores veritatis tenetur laborum
          excepturi, nemo dolorem. Et, blanditiis unde similique iusto nihil
          voluptate hic velit quis incidunt nulla tempore.
        </p>
        <br />
        <p className="md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rem
          porro accusantium totam doloremque voluptatem id, aperiam temporibus
          voluptate facilis incidunt excepturi consequatur vitae, soluta, alias
          nulla! Voluptatem nam impedit dolore quia repellat tempora. Ipsam
          similique doloremque minima expedita, est voluptatibus ratione aut
          iste hic quod, debitis quae dignissimos nam.
        </p>
      </div>
    </div>
  );
};

export default About;
