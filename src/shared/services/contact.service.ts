// 联系表单服务

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// 联系表单服务类
export class ContactService {
  // 模拟表单提交
  async submitContactForm(
    form: ContactForm
  ): Promise<{ success: boolean; message: string }> {
    // 这里模拟API调用，实际项目中应该调用真实的API
    console.log("Submitting contact form:", form);

    // 模拟异步操作
    return new Promise((resolve) => {
      setTimeout(() => {
        // 模拟成功响应
        resolve({
          success: true,
          message:
            "Your message has been sent successfully. We will get back to you soon.",
        });

        // 如果需要模拟失败，可以取消注释下面的代码
        /* resolve({
          success: false,
          message: 'There was an error sending your message. Please try again later.'
        }); */
      }, 1000);
    });
  }

  // 验证表单
  validateForm(form: ContactForm): {
    isValid: boolean;
    errors: Record<string, string>;
  } {
    const errors: Record<string, string> = {};

    if (!form.name.trim()) {
      errors.name = "Name is required";
    }

    if (!form.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      errors.email = "Email is invalid";
    }

    if (!form.subject.trim()) {
      errors.subject = "Subject is required";
    }

    if (!form.message.trim()) {
      errors.message = "Message is required";
    } else if (form.message.length < 10) {
      errors.message = "Message must be at least 10 characters";
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  }
}

// 导出服务的单例实例
export const contactService = new ContactService();
