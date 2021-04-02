import { Footer } from "./footer/footer";
import "./navbar/navbar";
import { NavBar } from "./navbar/navbar";
export const Container = (props) => {
  return (
    <div
      id={props.id}
      className="dark:bg-black dark:text-white text-black w-screen bg-white lg:px-80  items-stretch justify-items-stretch"
    >
      <NavBar />
      <div
        className={"flex flex-col justify-items-stretch text-lg p-10"
          .concat(" ")
          .concat(props.className)}
      >
        {props.children}
      </div>
      <Footer className="p-10" />
    </div>
  );
};

export const Spacer = () => <div className="flex-grow"></div>;
