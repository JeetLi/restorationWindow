import { useState } from "react";
import { FormWrapper, InputWrapper, DefaultSpan } from "./styles";
import { Button } from "../Button";
import InputNumber from "../InputNumber";
import { sendFormData } from "../../api/api";

interface FormProps {
  onClick: () => void;
  ButtonName: string;
}
const Form = ({ onClick, ButtonName }: FormProps) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.set("tel", phoneNumber);

    if (phoneNumber.length > 10) {
      try {
        const response = await sendFormData(formData);
        if (response.error) {
          throw new Error(response.error);
        }
        onClick();
        // Обработка успешной отправки формы
      } catch (error) {
        console.error(error);
      }
    }
    // if (phoneNumber.length > 10) {
    //   try {
    //     await sendFormData(formData);
    //     onClick();
    //     // Обработка успешной отправки формы
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
  };

  const handleInputChange = (input: string) => {
    setPhoneNumber(input);
  };

  return (
    <FormWrapper action="send.php" method="POST" onSubmit={handleSubmit}>
      <InputWrapper>
        <DefaultSpan>
          <InputNumber onInputChange={handleInputChange} />
        </DefaultSpan>
        <Button type="submit" disabled={phoneNumber.length < 10}>
          {ButtonName}
        </Button>
      </InputWrapper>
    </FormWrapper>
  );
};

export default Form;
