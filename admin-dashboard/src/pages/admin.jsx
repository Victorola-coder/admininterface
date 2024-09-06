/* eslint-disable react/prop-types */
import { Dashboard } from "../layouts";
import { useDoctorStore } from "../store/doctorstore";

export default function Home() {
  const { doctors } = useDoctorStore();
  return (
    <Dashboard>
      <div>
        <h3 className="font-pop text-[#0E0E0E] text-[32px] leading-[38.4px] ">
          Welcome, Admin
        </h3>
        <p className="text-base leading-[24px] text-[#858585]">
          Total of 15 appointments today.
        </p>
        <div className="mt-10 flex flex-row items-start flex-1 flex-wrap gap-10">
          <CARDS
            body="Doctors Registered"
            img="/images/seth.svg"
            title={doctors?.length}
          />
          <CARDS body="Doctors Registered" img="/images/seth.svg" title="13" />
          <CARDS body="Doctors Registered" img="/images/seth.svg" title="13" />
          <CARDS body="Doctors Registered" img="/images/seth.svg" title="13" />
          <CARDS body="Doctors Registered" img="/images/seth.svg" title="13" />
          <CARDS body="Doctors Registered" img="/images/seth.svg" title="13" />
        </div>
      </div>
    </Dashboard>
  );
}

const CARDS = ({ img, title, body }) => {
  return (
    <div className="bg-[#FFFFFF] px-[30px]  py-[25px] rounded-[10px] flex flex-row gap-6 items-center">
      <figure>
        <img src={img} alt={body} draggable={false} />
      </figure>
      <div>
        <h3 className="text-[#0E0E0E] font-pop text-[32px] leading-[38.4px] ">
          {title}
        </h3>
        <p className="text-[#6D6D6D] text-[18px] leading-[27px] ">{body}</p>
      </div>
    </div>
  );
};
