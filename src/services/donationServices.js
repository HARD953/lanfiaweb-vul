import axiosInstance from "../api/axiosInstance";

const makeDonation = (dataDonation) => {
    return axiosInstance.post("efdoargent/",dataDonation);
  };

const getMyDonation = () => {
    return axiosInstance.get("listargea/");
  };
  
  

const donationService = {
    makeDonation,
    getMyDonation,
    
};
export default donationService