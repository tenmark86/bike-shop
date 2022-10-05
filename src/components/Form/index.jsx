import React, { useState, useContext } from "react";
import { Flex, Button, Title, Text } from "components/ui";
import TextField from "components/TextField";
import Context from "containers/context/context";

import { BorderContainer } from "./styled";

import Checkout from "assets/checkout.png";

const Tabs = ["Checkout", "Check order status"]

function Form() {
    const { size, color, count } = useContext(Context);
    const [selectedTab, setSelectedTab] = useState(0);
    const [submitIsDone, setSubmitDone] = useState("");
    const [status, setStatus] = useState();

    const [formData, setFormData] = useState({
        name: {
            value: "",
            error: false,
        },
        email: {
            value: "",
            error: false,
        },
        phone: {
            value: "",
            error: false,
        },
        date: {
            value: new Date().toISOString().replace(/T.+/g, ""),
            error: false,
        },
    });

    const [deliveryNumber, setDeliveryNumber] = useState({
        value: "",
        error: false,
    });

    const onChangeFormData = (key) => (e) => {
        setFormData((prev) => ({ ...prev, [key]: { ...prev[key], value: e.target.value } }))
    }

    const onChangeDelivery = (e) => {
        setDeliveryNumber((prev) => ({ ...prev, value: e.target.value }))
    }

    const validateFormData = () => {
        let obj = { ...formData };
        Object.keys(obj).forEach((key) => obj[key].error = !obj[key].value)
        setFormData(obj);

        return Object.keys(obj).every(key => !obj[key].error)
    }

    const onSubmitFormData = (e) => {
        e.preventDefault();
        if (validateFormData()) {
            fetch("https://json-serve-some-test.herokuapp.com/bike-request", {
                method: "post",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify({
                    "name": formData.name.value,
                    "date": formData.date.value,
                    "email": formData.email.value,
                    "phone": formData.phone.value,
                    size,
                    color,
                    count,
                })
            }).then(res => res.json()).then(({ id }) => setSubmitDone(`Your order code${id}`));
        }
    }

    const validateDelivery = () => {
        setDeliveryNumber((prev) => ({ ...prev, error: !prev.value }))
    }

    const onSubmitDelivery = (e) => {
        e.preventDefault();
        if(validateDelivery){
            fetch(`https://json-serve-some-test.herokuapp.com/bike-request/${deliveryNumber.value}`)
                .then(res => { 
                    setStatus(deliveryNumber.value ? res.status : "") 
                })
            }
    }

    return (
        <BorderContainer>
            <Flex>
                {Tabs.map((tab, index) => (
                    <Flex flex={1} key={tab}>
                        <Button
                            width="100%"
                            color={selectedTab === index ? "#282828" : "#FFF"}
                            background={selectedTab === index ? "#FFF" : "#020106"}
                            onClick={() => setSelectedTab(index)}
                        >
                            {tab}
                        </Button>
                    </Flex>
                ))}
            </Flex>
            {selectedTab === 0 && (
                <Flex padding="60px 80px" direction="column">
                    <img src={Checkout} alt="" />
                    <Title margin="30px 0 100px">Fuel EX 9.8</Title>
                    <form onSubmit={onSubmitFormData}>
                        <TextField
                            placeholder="Full name"
                            errorLabel="Please enter your full name."
                            error={formData["name"].error}
                            value={formData["name"].value}
                            onChange={onChangeFormData("name")}
                        />
                        <TextField
                            placeholder="E-mail"
                            errorLabel=" Please enter your E-mail."
                            error={formData["email"].error}
                            value={formData["email"].value}
                            onChange={onChangeFormData("email")}
                        />
                        <TextField
                            placeholder="Telephone"
                            errorLabel="Please enter your phone number."
                            error={formData["phone"].error}
                            value={formData["phone"].value}
                            onChange={onChangeFormData("phone")}
                        />
                        <TextField
                            disabled
                            placeholder="delivery date"
                            errorLabel="Please enter a delivery date."
                            error={formData["date"].error}
                            value={formData["date"].value}
                            onChange={onChangeFormData("date")}
                        />
                        {submitIsDone || <Button type="submit">Checkout</Button>}
                    </form>
                </Flex>
            )}
            {selectedTab === 1 && (
                <Flex padding="60px 80px" direction="column">
                    <Text margin="30px 0 100px" font-size="18px">Enter your order number to find out about its status:</Text>
                    <form action="" onSubmit={onSubmitDelivery}>
                        <TextField
                            placeholder="Order number"
                            errorLabel="Please enter order code."
                            error={deliveryNumber.error}
                            value={deliveryNumber.value}
                            onChange={onChangeDelivery}
                        />
                        <Button type="submit">Get information</Button>
                        <p>
                            {({
                                200: "Your order is awaiting shipment",
                                404: "Invalid order code",
                            }[status] || "")}
                        </p>
                    </form>
                </Flex>
            )}
        </BorderContainer>
    )
}

export default Form;
