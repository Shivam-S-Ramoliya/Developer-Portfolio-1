"use client";

import emailjs from "@emailjs/browser";

/**
 * Initialize EmailJS with public key
 * Should be called once on app initialization
 */
export const initializeEmailJS = (publicKey) => {
  if (publicKey) {
    emailjs.init(publicKey);
  }
};

/**
 * Validate if all required email configuration is present
 * @param {Object} config
 * @returns {Object} { isValid: boolean, missingVars: string[] }
 */
export const validateEmailConfig = (config) => {
  const { serviceId, templateId, publicKey } = config;
  const missingVars = [];

  if (!serviceId) missingVars.push("NEXT_PUBLIC_EMAILJS_SERVICE_ID");
  if (!templateId) missingVars.push("NEXT_PUBLIC_EMAILJS_TEMPLATE_ID");
  if (!publicKey) missingVars.push("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY");

  return {
    isValid: missingVars.length === 0,
    missingVars,
  };
};

/**
 * Send contact form email
 * @param {Object} params
 * @param {string} params.name - Sender's name
 * @param {string} params.email - Sender's email
 * @param {string} params.subject - Email subject
 * @param {string} params.message - Email message
 * @param {Object} params.config - EmailJS configuration
 * @returns {Promise}
 */
export const sendContactEmail = async ({
  name,
  email,
  subject,
  message,
  config,
}) => {
  const { isValid, missingVars } = validateEmailConfig(config);

  if (!isValid) {
    const error = new Error(
      `Missing email configuration: ${missingVars.join(", ")}`,
    );
    error.code = "MISSING_CONFIG";
    throw error;
  }

  const emailData = {
    from_name: name,
    from_email: email,
    subject,
    message,
    name,
    email,
  };

  try {
    const result = await emailjs.send(
      config.serviceId,
      config.templateId,
      emailData,
      config.publicKey,
    );

    return {
      success: true,
      messageId: result.status,
    };
  } catch (error) {
    console.error("EmailJS Error:", error);

    const emailError = new Error(
      error?.text || error?.message || "Failed to send message",
    );
    emailError.originalError = error;
    throw emailError;
  }
};
