// export const sendFormData = async (data: string): Promise<any> => {
//   try {
//     const response = await fetch("/api/send.php", {
//       method: "POST",
//       body: data,
//       headers: {
//         "Content-Type": "text/plain",
//       },
//     });

//     if (!response.ok) {
//       throw new Error("Не удалось отправить данные формы");
//     }

//     return response.text(); // Используем метод .text() для получения текстового ответа
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

export const sendFormData = async (formData: FormData): Promise<any> => {
  try {
    const response = await fetch('/api/send.php', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Не удалось отправить данные формы');
    }

    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
