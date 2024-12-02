import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Menuitem from "../../Shared/Menuitem/Menuitem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItmes = data.filter((item) => item.category === "popular");
        setMenu(popularItmes);
      });
  }, []);
  return (
    <section className="mb-12 ">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Item"
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-10">
        {menu.map((item) => (
          <Menuitem key={item._id} item={item}></Menuitem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
