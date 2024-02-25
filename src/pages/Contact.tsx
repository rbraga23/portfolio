import { useTranslation } from "react-i18next";
import { Modal } from "../components/Layout/Modal";
import { Input } from "../components/Form/Input";
import { TextArea } from "../components/Form/Textarea";
import { useContactModal } from "../hooks/useContactModal.hook";
import { Button } from "../components/Form/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Cookies from "js-cookie";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  message: yup.string().required(),
});

export function Contact() {
  const { t } = useTranslation();
  const { isContactModalOpen, setIsContactModalOpen } = useContactModal();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmitHandler(data: yup.InferType<typeof schema>) {
    try {
      const endpoint =
        "https://api.hsforms.com/submissions/v3/integration/submit/44420289/e1da6ae5-0c3d-403c-8379-7a6942a489a7";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: [
            {
              name: "email",
              value: data.email,
            },
            {
              name: "message",
              value: data.message,
            },
          ],
          context: {
            hutk: Cookies.get("hubspotutk"),
            pageUri: window.location.href,
            pageName: document.title,
          },
        }),
      });
      if (res.ok) {
        reset();
      } else {
        setSubmitError(t("submitError"));
      }
    } catch (error) {
      setSubmitError(t("submitError"));
    }
  }

  return (
    <Modal
      isOpen={isContactModalOpen}
      setIsOpen={setIsContactModalOpen}
      title={t("contactMe")}
    >
      <div className="w-full h-[700px] max-h-screen">
        <div className="flex w-full p-8 flex-col">
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="my-5">
              <Input label="Email" id="email" {...register("email")} />
              <span className="text-red-500">{errors.email?.message}</span>
            </div>
            <div className="my-12">
              <TextArea
                label={t("message")}
                rows={3}
                {...register("message")}
              />
              <span className="text-red-500">{errors.message?.message}</span>
            </div>
            <div className="-my-3">
              <Button variant="primary" text={t("send")} className="w-24" />
              <span className="text-red-500">{submitError}</span>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}
