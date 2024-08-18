//package mailsender.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.mail.javamail.MimeMessageHelper;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;
//
//import jakarta.mail.MessagingException;
//import jakarta.mail.internet.MimeMessage;
//import jakarta.servlet.http.HttpServletRequest;
//
//@RestController
//public class MailController {
//	@Autowired
//	private JavaMailSender javaMailSender;
//
//	@Value(value = "abcd")
//	private String token;
//
//	@PostMapping("/send-mail")
//	public String sendMail(HttpServletRequest request, @RequestParam String email) {
//		String siteURL = request.getRequestURL().toString();
//		String URL = siteURL.replace(request.getServletPath(), "/verify") + "?token=" + token;
//		MimeMessage message = javaMailSender.createMimeMessage();
//		MimeMessageHelper helper = new MimeMessageHelper(message);
//		try {
//			helper.setTo(email);
//			helper.setSubject("Account Verification");
//			helper.setText(URL);
//			javaMailSender.send(message);
//			return "Mail Has Been Sent";
//		} catch (MessagingException e) {
//			e.printStackTrace();
//			return "Cannot send mail";
//		}
//	}
//
//	@GetMapping("/verify")
//	public String verify(@RequestParam String token) {
//		if (this.token.equals(token)) {
//			return "Verification successfully";
//		} else {
//			return "Cannot Verify";
//		}
//	}
//}
//
////	MimeMessage message = javaMailSender.createMimeMessage();
////	MimeMessageHelper helper = new MimeMessageHelper(message);
////	try {
////		helper.setSubject("Testing Mail senderAPI");
////		helper.setText("Creating the mail to test our API");
////		helper.setTo(email_id);
////		javaMailSender.send(message);
////		return "Mail has been Sent";
////	} catch (MessagingException e) {
////		e.printStackTrace();
////		return "Cannot sent mail";
////	}
////}
