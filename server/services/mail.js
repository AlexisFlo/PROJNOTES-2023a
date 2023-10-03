import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import Handlebars from 'handlebars';
import winston from 'winston';

const rootDir = process.cwd();
function processingTemplate(view, viewModel) {
  const source = fs.readFileSync(
    path.join(rootDir, 'server', 'services', 'mail', 'views', `${view}.hbs`),
    'utf8'
  );
  const template = Handlebars.compile(source);
  const html = template(viewModel);
  return html;
}

// class
class MailSender {
  constructor(options) {
    if (!options) throw new Error('Need options to create a MailSender');
    this.transporter = nodemailer.createTransport(options);
    this.mail = {
      from: '',
      to: '',
      subject: '',
      text: '',
      html: '',
    };
  }

  // Methods
  async sendMail(view, viewModel, text) {
    if (!view || !viewModel || !text)
      throw new Error('Need to provide "view" and "viewModel"');
    if (this.form === '' || this.to === '' || this.subject === '')
      throw new Error('Mail info is incomplete');
    try {
      this.mail.html = processingTemplate(view, viewModel);
      this.mail.text = text;
      return this.transporter.sendMail(this.mail);
    } catch (error) {
      winston.info(`Error: ${error.message}}`);
      return null;
    }
  }
}

export default MailSender;
