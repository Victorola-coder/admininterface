/* eslint-disable react/prop-types */
const CustomStatus = ({ status }) => {
  switch (status) {
    case "approved":
      return (
        <button className=" py-[5px] border-[#00B4D8] rounded-[8px] border-[1.5px] text-[#00B4D8] px-[21px] bg-opacity-10 bg-[#00B4D8]">
          Approved
        </button>
      );
    case "declined":
      return (
        <button className=" py-[5px] border-[#D80000] rounded-[8px] border-[1.5px] text-[#D80000] px-[21px] bg-opacity-10 bg-[#D80000]">
          Declined
        </button>
      );
    case "completed":
      return (
        <button className=" py-[5px] border-[#00CB51] rounded-[8px] border-[1.5px] text-[#00CB51] px-[21px] bg-opacity-10 bg-[#00CB51]">
          Completed
        </button>
      );

    default:
      return (
        <button className=" py-[5px] border-[#F6B95E] rounded-[8px] border-[1.5px] text-[#F6B95E] px-[21px] bg-opacity-10 bg-[#F6B95E]">
          Pending
        </button>
      );
  }
};

export default CustomStatus;
