import { Box, Grid, Typography } from "@mui/material";
import CV1 from "./CV/CV1";
import defaultCvData from '../assets/defaultCvData.json'
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

import { toast } from "react-toastify";

export default function ManageCV({ user }) {
    const navigate = useNavigate()
    const navigateTo = function (location) {
        navigate(location)
    }
    const [print, setPrint] = useState(false)
    const loggedUserId = user.user._id
    const [cvData, setCVDATA] = useState(defaultCvData)
    useEffect(()=>{
        if(user.user.role!="candidate"){
            navigateTo("/login")
        }
    })
    return (<>
        <Grid
            container
            sx={{
                background: "#f1f2f7",
                p: 3,
                columnGap: 4
            }}
        >
            <Grid
                item
                xs={6}>
                <CV1 editable={false} data={cvData} print={print} setPrint={setPrint} setCVDATA={setCVDATA} />
            </Grid>
            <Grid
                xs={4}
                item
                sx={{
                    ml: 10,
                }}
            >
                <Grid
                    item
                    xs={12}
                >
                    <Typography variant="h4" color="initial">Hướng dẫn viết CV hiệu quả</Typography>
                    {/* thong tin ca nhan */}
                    <Box
                        sx={{
                            mb: 2
                        }}
                    >
                        <Typography variant="h6" fontWeight={500}>👉 Thông tin cá nhân</Typography>
                        <Typography variant="body1" color="initial">
                            Đây là mục bạn cần tóm tắt về các thông tin cơ bản về bản thân, bao gồm: họ tên, ngày/tháng/năm sinh, địa chỉ, số điện thoại và email liên lạc. Với những thông tin giới thiệu bản thân trong CV, nhà tuyển dụng có thể liên lạc với bạn dễ hơn khi đạt yêu cầu. Bên cạnh đó, nếu bạn có những trích dẫn mục tiêu sống hay những câu nói mà bạn tâm đắc, bạn có thể viết một cách ngắn gọn để thể hiện bản thân.
                        </Typography>
                    </Box>
                    {/* Trinh do hoc van */}
                    <Box
                        sx={{
                            mb: 2
                        }}
                    >
                        <Typography variant="h6" fontWeight={500}>👉 Trình độ học vấn</Typography>
                        <Typography variant="body1" color="initial">
                            Tại mục trình độ học vấn, bạn nên ghi về bậc học cao nhất của mình và liệt kê thêm những thành tích, giải thưởng đã đạt được trong quá trình học tập (nếu có). Ngoài ra, bạn có thể ghi thêm về những dự án, chương trình nghiên cứu, các khóa học chuyên môn, nghiệp vụ có liên quan đến vị trí ứng tuyển mà bạn đã tham gia. Cho nhà tuyển dụng thấy được năng lực làm việc cũng như tính cầu thị, ham học hỏi trong bạn.
                        </Typography>
                    </Box>
                    {/* ky nang */}
                    <Box
                        sx={{
                            mb:2
                        }}
                    >
                        <Typography variant="h6"  fontWeight={500}>👉 Kỹ Năng</Typography>
                        <Typography variant="body1" color="initial">
                        Đây là mục bạn cần tóm tắt về các thông tin cơ bản về bản thân, bao gồm: họ tên, ngày/tháng/năm sinh, địa chỉ, số điện thoại và email liên lạc. Với những thông tin giới thiệu bản thân trong CV, nhà tuyển dụng có thể liên lạc với bạn dễ hơn khi đạt yêu cầu. Bên cạnh đó, nếu bạn có những trích dẫn mục tiêu sống hay những câu nói mà bạn tâm đắc, bạn có thể viết một cách ngắn gọn để thể hiện bản thân.
                        </Typography>
                    </Box>
                    {/* Kinh nghiem */}
                    <Box
                        sx={{
                            mb:2
                        }}
                    >
                        <Typography variant="h6"  fontWeight={500}>👉 Kinh nghiệm</Typography>
                        <Typography variant="body1" color="initial">
                        Đây là phần để nói đến những công việc bạn đã từng làm trước đây, tuy nhiên bạn không nên liệt kê hết vào CV. Điều đó sẽ làm cho CV trở nên dài và không có điểm nhấn cụ thể. Vì thế, bạn chỉ nên viết những kinh nghiệm công việc có liên quan đến vị trí ứng tuyển, nhằm gây được ấn tượng với nhà tuyển dụng.
                        </Typography>
                    </Box>
                    {/* Mục tiêu */}
                    <Box
                        sx={{
                            mb:2
                        }}
                    >
                        <Typography variant="h6"  fontWeight={500}>👉 Mục tiêu nghề nghiệp</Typography>
                        <Typography variant="body1" color="initial">
                        Hiểu đơn giản, mục tiêu nghề nghiệp là đích đến của sự nghiệp mà bạn mong muốn đạt được trong tương lai, thông qua việc định hướng và trang bị những kiến thức, kinh nghiệm cần có. Với mục tiêu nghề nghiệp, bạn cần phân biệt rõ giữa mục tiêu ngắn hạn và đâu là mục tiêu dài hạn để biết được bản thân cần làm gì và phải làm gì để đạt được những mục tiêu đó
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}>
                    <Button sx={{ mr: 2 }} variant="contained" color="success" onClick={async () => {
                        const res = await axios.post(`/candidate/${loggedUserId}/resume`, cvData)
                        if (res.data.status && res.data.status != 200) {
                            toast.warning("Tạo cv thất bại")
                        } else {
                            console.log(res)
                            toast.success("Tạo cv thành công")
                        }
                    }} >Lưu CV</Button>
                    <Button variant="contained" color="success" onClick={() => {
                        setPrint(true)
                        console.log(`12`)
                    }} >IN CV</Button>
                </Grid>
            </Grid>
        </Grid>
    </>)
}