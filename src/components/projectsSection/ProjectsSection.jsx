import Card from "../card/Card";
import img1 from "../../assets/img/img-cards/card-1.png";
import img2 from "../../assets/img/img-cards/card-2.png";
import img3 from "../../assets/img/img-cards/card-3.png";
import img4 from "../../assets/img/img-cards/card-4.png";

const lastsProjects = [
  {
    id: 1,
    title: "Corporativos",
    image: img1,
  },
  {
    id: 2,
    title: "Remodelaciones",
    image: img2,
  },
  {
    id: 3,
    title: "Habitacionales",
    image: img3,
  },
  {
    id: 4,
    title: "Full Smart Home",
    image: img4,
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-5 px-4">
      <h2 className="text-center mb-3 fw-bold">
        Descubre nuestros últimos proyectos en todo Chile
      </h2>
      <div className="container-fluid text-center">
        <div className="row">
          {lastsProjects.map((item) => (
            <Card key={item.id} title={item.title} image={item.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
