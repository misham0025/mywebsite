import { TextInput, Container, Group, Select, Button } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { DatePicker } from "@mantine/dates";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import axios from "axios";

function Postad() {
//     const[data,setData]=useState([])
//     useEffect(()=>{
//         loadData()
//     },[])
//     const loadData=async()=>{
// try {
//     let response = await axios.get('http://localhost:5500/adpages')
//     let res = response.data
//     console.log(res)
//     setData(res)
// } catch (error) {
//     console.log(error)
// }
//     }
  return (
    <Container fluid>
      <Group
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Group sx={{ width: "350px",padding:"20px" }}>
         
          <Select
            label="Select Location"
            style={{ width: 400 }}
            placeholder="Pick one"
            data={
                [
              { value: "react", label: "Coimbatote", disabled: "true" },
              { value: "ng", label: "Chennai" },
              { value: "svelte", label: "Madurai" },
              { value: "vue", label: "salem" },
            ]
        }
          />
          <DatePicker
            placeholder="Pick date"
            label="Event date"
            firstDayOfWeek="sunday"
            style={{ width: 400 }}
            minDate={dayjs(new Date()).startOf("date").add(0, "days").toDate()}
            maxDate={dayjs(new Date())
              .endOf("month")
              .subtract(-60, "days")
              .toDate()}
            clearable={false}
            disabled={false}
            onChange={(e) => {
              alert(e);
            }}
          />
          <Select
            label="Select Ad Page"
            placeholder="Pick one"
            style={{ width: 400 }}
            data={[
              { value: "react", label: "1", disabled: "true" },
              { value: "ng", label: "2 A" },
              { value: "svelte", label: "2 B" },
              { value: "vue", label: "3 A" },
            ]}
          />
        <Button color="dark">Next</Button>
        </Group>
      </Group>
    </Container>
  );
}

export default Postad;
