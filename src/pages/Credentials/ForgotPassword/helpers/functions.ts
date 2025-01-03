import {
  resetPassword,
  confirmResetPassword,
  type ResetPasswordOutput,
  type ConfirmResetPasswordInput,
} from "aws-amplify/auth";
import { Dispatch, SetStateAction } from "react";

export async function handleResetPassword(username: string) {
  try {
    const output = await resetPassword({ username });
    handleResetPasswordNextSteps(output);
  } catch (error) {
    return "UserNotFoundException";
  }
}

// export async function handleResetPassword(
//   username: string,
//   setSubmitMessage: Dispatch<SetStateAction<SubmitMessage>>
// ) {
//   try {
//     const output = await resetPassword({ username });
//   } catch (error) {
//     setSubmitMessage((prev) => {
//       const newMessage = {
//         ...prev,
//         hasError: false,
//         message: "Confirmation code was sent.",
//       };
//       console.log(newMessage); // Logs the new state immediately.
//       return newMessage;
//     });
//   }
// }

function handleResetPasswordNextSteps(output: ResetPasswordOutput) {
  const { nextStep } = output;
  switch (nextStep.resetPasswordStep) {
    case "CONFIRM_RESET_PASSWORD_WITH_CODE":
      const codeDeliveryDetails = nextStep.codeDeliveryDetails;
      return `Confirmation code was sent to ${codeDeliveryDetails.deliveryMedium}`;
    case "DONE":
      return "Successfully reset password.";
  }
}

export async function handleConfirmResetPassword({
  username,
  confirmationCode,
  newPassword,
}: ConfirmResetPasswordInput) {
  try {
   await confirmResetPassword({ username, confirmationCode, newPassword });
  } catch (error) {
    console.log(error);
  }
}
