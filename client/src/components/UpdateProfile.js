import {
  Autocomplete,
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  OutlinedInput,
  TextField,
  Typography,
  Chip,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import { Editor, EditorState, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import PersonIcon from "@mui/icons-material/Person";
import env from "../assets/env.json";
import logoImage from "../assets/camera_icon.png";
import Image from "mui-image";
import { useEffect, useRef, useState } from "react";
import RichText from "./RichText";
import axios from "axios";
import SchoolIcon from "@mui/icons-material/School";
import FlagIcon from "@mui/icons-material/Flag";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import WorkIcon from "@mui/icons-material/Work";
import profileSchema from "../validate/profileValidate";
import { toast } from "react-toastify";
import useFetch from "../hooks/useFetch";

import Loading from "./Loading";
import {
  getAddressTitleList,
  getAddressIdFromTitle,
  getAddressTitleFromId,
} from "./other/SelectDataUtils";

export default function UpdateProfile({ user }) {
  const imageRef = useRef();
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(logoImage);
  const [skills, setSkills] = useState(() => EditorState.createEmpty());
  const [education, setEducation] = useState(() => EditorState.createEmpty());

  const [target, setTarget] = useState(() => EditorState.createEmpty());
  const [activity, setActivity] = useState(() => EditorState.createEmpty());
  const [certificate, setCertificate] = useState(() =>
    EditorState.createEmpty()
  );
  const [aboutMe, setAboutMe] = useState(() => EditorState.createEmpty());
  const [experience, setExperience] = useState(() => EditorState.createEmpty());
  const [userData, setUserData] = useState({
    candidate: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    avatar: "",
    addressId: "",
    fullAddress: "",

    skillsCv: "",
    educationCv: JSON.stringify(convertToRaw(education.getCurrentContent())),
    objectiveCv: JSON.stringify(convertToRaw(target.getCurrentContent())),
    activitiesCv: JSON.stringify(convertToRaw(activity.getCurrentContent())),
    certificationsCv: JSON.stringify(
      convertToRaw(certificate.getCurrentContent())
    ),
    aboutMe: JSON.stringify(convertToRaw(aboutMe.getCurrentContent())),
    experienceCv: JSON.stringify(convertToRaw(experience.getCurrentContent())),
  });
  const getTextArrayFromRich = function (rawdata) {
    if (rawdata.blocks.length > 0) {
      return rawdata.blocks.map((item) => item.text);
    }
  };
  const upDateProfileData = function () {
    //some field for searching
    let rs = {
      ...userData,
      objective: getTextArrayFromRich(
        convertToRaw(target.getCurrentContent())
      ).join(" "),
      activities: getTextArrayFromRich(
        convertToRaw(activity.getCurrentContent())
      ).join(" "),
      certifications: getTextArrayFromRich(
        convertToRaw(certificate.getCurrentContent())
      ).join(" "),
      experience: getTextArrayFromRich(
        convertToRaw(experience.getCurrentContent())
      ).join(" "),
      education: getTextArrayFromRich(
        convertToRaw(education.getCurrentContent())
      ).join(" "),
    };
    console.log(rs);
    profileSchema.validate(rs).then((validatedData) => {
      axios
        .put(`/candidate/${user.user._id}/profile`, validatedData)
        .then((res) => {
          if (res.data.status && res.data.status != 200) {
            toast.error("Cập nhật hồ sơ thất bại");
          } else {
            toast.success("Cập nhật hồ sơ thành công");
          }
        });
    });
  };

  function navigateTo(location) {
    navigate(location);
  }
  useEffect(() => {
    if (!user.isLogin && user.user.role != "rec") {
      navigateTo("/login");
    }
    setUserData({
      ...userData,
      educationCv: JSON.stringify(convertToRaw(education.getCurrentContent())),
      objectiveCv: JSON.stringify(convertToRaw(target.getCurrentContent())),
      activitiesCv: JSON.stringify(convertToRaw(activity.getCurrentContent())),
      certificationsCv: JSON.stringify(
        convertToRaw(certificate.getCurrentContent())
      ),
      aboutMe: JSON.stringify(convertToRaw(aboutMe.getCurrentContent())),
      experienceCv: JSON.stringify(
        convertToRaw(experience.getCurrentContent())
      ),
    });
  }, [education, target, activity, certificate, experience, aboutMe]);
  return (
    <>
      <Grid
        sx={{
          background: "#f1f2f6",
          p: 4,
        }}
      >
        <Grid
          component={Paper}
          sx={{
            width: "80%",
            mx: "auto",
            background: "#f1f2f6",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              p: 2,
              borderBottom: "1px solid rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              background: "#fff",
            }}
          >
            <PersonIcon fontSize="large" />
            <Typography variant="h5" fontWeight={550} sx={{ ml: 1 }}>
              Cập nhật thông tin cá nhân
            </Typography>
          </Box>
          {/* head info */}
          <Grid
            container
            sx={{
              p: 2,
              rowGap: 2,
              columnGap: 2,
              background: "#fff",
              mb: 2,
              alignItems: "center",
            }}
          >
            <Grid
              container
              item
              xs={12}
              sx={{
                rowGap: 2,
                columnGap: 4,
                background: "#fff",
                alignItems: "center",
              }}
            >
              <Grid item xs={2} sx={{}}>
                <Image
                  src={avatar}
                  onClick={() => {
                    imageRef.current.click();
                  }}
                  sx={{
                    border: "1px solid gray",
                  }}
                  width="100%"
                  height="100%"
                  duration={0}
                  fit="scale-down"
                ></Image>
                <OutlinedInput
                  fullWidth
                  color="success"
                  type="file"
                  size="small"
                  inputRef={imageRef}
                  sx={{
                    mt: 1,
                    display: "none",
                  }}
                  onChange={(e) => {
                    const fileReader = new FileReader();
                    fileReader.onloadend = () => {
                      setAvatar(fileReader.result);
                      setUserData({
                        ...userData,
                        avatar: fileReader.result,
                      });
                    };
                    fileReader.readAsDataURL(e.target.files[0]);
                  }}
                />
              </Grid>
              <Grid
                container
                item
                xs={9}
                sx={{
                  rowGap: 2,
                  columnGap: 2,
                }}
              >
                <Grid item xs={5}>
                  <Typography variant="p" fontWeight={500}>
                    Họ và tên
                  </Typography>
                  <OutlinedInput
                    fullWidth
                    color="success"
                    size="small"
                    sx={{ mt: 1 }}
                    placeholder="Nguyễn Văn A"
                    onBlur={(e) => {
                      setUserData({
                        ...userData,
                        name: e.target.value,
                      });
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="p" fontWeight={500}>
                    Ngày sinh
                  </Typography>
                  <OutlinedInput
                    color="success"
                    fullWidth
                    size="small"
                    sx={{ mt: 1 }}
                    type="date"
                    onChange={(e) => {
                      setUserData({
                        ...userData,
                        dob: e.target.value,
                      });
                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="p" fontWeight={500}>
                    Giới tính
                  </Typography>
                  <Autocomplete
                    freeSolo
                    size="small"
                    sx={{ mt: 1 }}
                    color="success"
                    options={env.REACT_APP_SEXS.split(", ")}
                    onInputChange={(e, value) => {
                      setUserData({
                        ...userData,
                        gender: value,
                      });
                    }}
                    renderInput={(params) => (
                      <TextField color="success" {...params} />
                    )}
                  />
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="p" fontWeight={500}>
                    Email
                  </Typography>
                  <OutlinedInput
                    fullWidth
                    color="success"
                    size="small"
                    sx={{ mt: 1 }}
                    placeholder="congphongkiemsi@gmail.com"
                    onBlur={(e) => {
                      setUserData({
                        ...userData,
                        email: e.target.value,
                      });
                    }}
                  />
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="p" fontWeight={500}>
                    Số điện thoại
                  </Typography>
                  <OutlinedInput
                    fullWidth
                    color="success"
                    size="small"
                    sx={{ mt: 1 }}
                    placeholder="0808123789"
                    onBlur={(e) => {
                      setUserData({
                        ...userData,
                        phone: e.target.value,
                      });
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="p" fontWeight={500}>
                    Địa chỉ
                  </Typography>
                  <OutlinedInput
                    fullWidth
                    color="success"
                    size="small"
                    sx={{ mt: 1 }}
                    placeholder="Ấp Tân An, Xã Tân An, Huyện Đầm Dơi, Tỉnh Cà Mau"
                    onBlur={(e) => {
                      setUserData({
                        ...userData,
                        fullAddress: e.target.value,
                      });
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              p: 2,
              rowGap: 2,
              columnGap: 2,
              background: "#fff",
              mb: 2,
              alignItems: "center",
            }}
          >
            <Grid
              container
              item
              xs={12}
              sx={{
                rowGap: 2,
                columnGap: 4,
                background: "#fff",
                alignItems: "center",
              }}
            >
              <Grid
                container
                item
                xs={12}
                sx={{
                  rowGap: 2,
                  columnGap: 2,
                }}
              >
                <Grid item xs={4}>
                  <Typography variant="p" fontWeight={500}>
                    Công việc cần tìm
                  </Typography>
                  <OutlinedInput
                    fullWidth
                    color="success"
                    size="small"
                    sx={{ mt: 1 }}
                    placeholder="Web Developer"
                    onBlur={(e) => {
                      setUserData({
                        ...userData,
                        title: e.target.value,
                      });
                    }}
                  />
                </Grid>

                <Grid item xs={3}>
                  <Typography variant="p" fontWeight={500}>
                    Địa chỉ làm việc mong muốn
                  </Typography>
                  <Autocomplete
                    freeSolo
                    size="small"
                    sx={{ mt: 1 }}
                    color="success"
                    options={getAddressTitleList()}
                    onInputChange={(e, value) => {
                      setUserData({
                        ...userData,
                        addressId: getAddressIdFromTitle(value),
                      });
                    }}
                    renderInput={(params) => (
                      <TextField color="success" {...params} />
                    )}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* body info */}
          <Grid
            container
            sx={{ p: 2, rowGap: 1, columnGap: 2, background: "#fff", mb: 2 }}
          >
            <Grid item xs={12} sx={{ mb: 2 }}>
              <Chip icon={<SchoolIcon />} label="Học vấn" color="success" />
              <RichText editorState={education} setEditorState={setEducation} />
            </Grid>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <Chip
                icon={<WorkIcon />}
                label="Kinh nghiệm làm việc"
                color="success"
              />
              <RichText
                editorState={experience}
                setEditorState={setExperience}
              />
            </Grid>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <Chip icon={<WorkIcon />} label="Kỹ năng" color="success" />
              <RichText editorState={skills} setEditorState={setSkills} />
            </Grid>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <Chip
                icon={<CrisisAlertIcon />}
                label="Mục tiêu nghề nghiệp"
                color="success"
              />
              <RichText editorState={target} setEditorState={setTarget} />
            </Grid>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <Chip icon={<FlagIcon />} label="Hoạt động" color="success" />
              <RichText editorState={activity} setEditorState={setActivity} />
            </Grid>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <Chip
                icon={<WorkspacePremiumIcon />}
                label="Chứng chỉ"
                color="success"
              />
              <RichText
                editorState={certificate}
                setEditorState={setCertificate}
              />
            </Grid>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <Chip
                icon={<SentimentVerySatisfiedIcon />}
                label="Giới thiệu về mình"
                color="success"
              />
              <RichText editorState={aboutMe} setEditorState={setAboutMe} />
            </Grid>
            <Button
              sx={{ mt: 1, minWidth: 200, mr: "auto" }}
              size="small"
              variant="contained"
              onClick={() => {
                // console.log(data)
                upDateProfileData();
              }}
            >
              Cập nhật
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
