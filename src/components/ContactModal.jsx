import React, { useState, useEffect, useRef } from 'react';
import { personalInfo } from '../data/portfolio.js';

// ── EmailJS credentials ────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_wyspx8t';
const EMAILJS_TEMPLATE_ID = 'template_thlsqhf';
const EMAILJS_PUBLIC_KEY  = 'TCrGewtMzJIr_YMw2';

const INITIAL = { name: '', email: '', subject: '', message: '' };

// ── Styles ─────────────────────────────────────────────────────
const s = {
  overlay: {
    position       : 'fixed',
    inset          : '0',
    background     : 'rgba(0,0,0,0.88)',
    backdropFilter : 'blur(5px)',
    zIndex         : '1000',
    display        : 'flex',
    alignItems     : 'center',
    justifyContent : 'center',
    padding        : '20px',
    animation      : 'fadeIn 0.18s ease',
  },
  modal: {
    background   : '#0d0d0d',
    border       : '1px solid #2a2a2a',
    borderRadius : '10px',
    width        : '100%',
    maxWidth     : '540px',
    overflow     : 'hidden',
    boxShadow    : '0 24px 80px rgba(0,0,0,0.9)',
  },
  header: {
    background     : '#000000',
    borderBottom   : '1px solid #1e1e1e',
    padding        : '10px 16px',
    display        : 'flex',
    alignItems     : 'center',
    justifyContent : 'space-between',
  },
  tabChip: {
    display      : 'flex',
    alignItems   : 'center',
    gap          : '7px',
    fontSize     : '12px',
    color        : '#e8e8e8',
    fontFamily   : 'Inter, sans-serif',
    padding      : '4px 14px',
    background   : '#0d0d0d',
    borderRadius : '6px 6px 0 0',
    borderTop    : '2px solid #fe8019',
  },
  toLine: {
    padding        : '8px 24px',
    borderBottom   : '1px solid #1e1e1e',
    fontSize       : '11px',
    color          : '#555555',
    fontFamily     : 'Inter, sans-serif',
    display        : 'flex',
    alignItems     : 'center',
    gap            : '8px',
    background     : '#080808',
  },
  toVal: {
    color      : '#fe8019',
    fontFamily : "'JetBrains Mono', monospace",
  },
  closeBtn: {
    width          : '28px',
    height         : '28px',
    borderRadius   : '5px',
    border         : 'none',
    background     : 'transparent',
    color          : '#555555',
    cursor         : 'pointer',
    fontSize       : '15px',
    display        : 'flex',
    alignItems     : 'center',
    justifyContent : 'center',
  },
  body: {
    padding : '20px 24px 24px',
  },
  fieldWrap: {
    marginBottom : '13px',
  },
  label: {
    fontSize      : '10px',
    color         : '#555555',
    fontFamily    : 'Inter, sans-serif',
    textTransform : 'uppercase',
    letterSpacing : '0.09em',
    marginBottom  : '5px',
    display       : 'block',
  },
  input: (focused) => ({
    width        : '100%',
    background   : '#0a0a0a',
    border       : `1px solid ${ focused ? '#fe8019' : '#2a2a2a' }`,
    borderRadius : '5px',
    padding      : '9px 12px',
    color        : '#e8e8e8',
    fontSize     : '12px',
    fontFamily   : "'JetBrains Mono', monospace",
    outline      : 'none',
    boxSizing    : 'box-sizing',
    transition   : 'border-color 0.15s ease',
    width        : '100%',
  }),
  textarea: (focused) => ({
    width        : '100%',
    background   : '#0a0a0a',
    border       : `1px solid ${ focused ? '#fe8019' : '#2a2a2a' }`,
    borderRadius : '5px',
    padding      : '9px 12px',
    color        : '#e8e8e8',
    fontSize     : '12px',
    fontFamily   : "'JetBrains Mono', monospace",
    outline      : 'none',
    transition   : 'border-color 0.15s ease',
    resize       : 'vertical',
    minHeight    : '120px',
    lineHeight   : '1.65',
    width        : '100%',
    boxSizing    : 'border-box',
  }),
  row: {
    display : 'flex',
    gap     : '12px',
  },
  half: {
    flex : '1',
  },
  footer: {
    display        : 'flex',
    alignItems     : 'center',
    justifyContent : 'flex-end',
    gap            : '10px',
    marginTop      : '18px',
  },
  cancelBtn: {
    padding      : '9px 16px',
    background   : 'transparent',
    color        : '#666666',
    border       : '1px solid #2a2a2a',
    borderRadius : '5px',
    fontSize     : '12px',
    fontFamily   : 'Inter, sans-serif',
    cursor       : 'pointer',
  },
  sendBtn: (sending) => ({
    padding        : '9px 22px',
    background     : sending ? '#444444' : '#fe8019',
    color          : '#000000',
    border         : 'none',
    borderRadius   : '5px',
    fontSize       : '12px',
    fontWeight     : '700',
    fontFamily     : 'Inter, sans-serif',
    cursor         : sending ? 'not-allowed' : 'pointer',
    transition     : 'background 0.18s ease',
    display        : 'flex',
    alignItems     : 'center',
    gap            : '6px',
    minWidth       : '140px',
    justifyContent : 'center',
  }),
  error: {
    fontSize     : '11px',
    color        : '#fb4934',
    fontFamily   : 'Inter, sans-serif',
    marginTop    : '10px',
    padding      : '8px 12px',
    background   : '#1a0a0a',
    border       : '1px solid #3a1a1a',
    borderRadius : '4px',
  },
  successWrap: {
    textAlign : 'center',
    padding   : '36px 24px',
  },
  successIcon: {
    fontSize     : '44px',
    marginBottom : '14px',
  },
  successTitle: {
    fontSize     : '15px',
    fontWeight   : '700',
    color        : '#b8bb26',
    fontFamily   : 'Inter, sans-serif',
    marginBottom : '8px',
  },
  successSub: {
    fontSize   : '12px',
    color      : '#888888',
    fontFamily : 'Inter, sans-serif',
    lineHeight : '1.7',
  },
  successClose: {
    marginTop    : '22px',
    padding      : '9px 24px',
    background   : 'transparent',
    color        : '#a0a0a0',
    border       : '1px solid #2a2a2a',
    borderRadius : '5px',
    fontSize     : '12px',
    fontFamily   : 'Inter, sans-serif',
    cursor       : 'pointer',
  },
};

// ── Small controlled input with focus highlight ────────────────
function Field({ label, children }) {
  return (
    <div style={ s.fieldWrap }>
      <span style={ s.label }>{ label }</span>
      { children }
    </div>
  );
}

function Input({ value, onChange, placeholder, type = 'text' }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type={ type }
      value={ value }
      onChange={ onChange }
      placeholder={ placeholder }
      style={ s.input(focused) }
      onFocus={ () => setFocused(true) }
      onBlur={ () => setFocused(false) }
    />
  );
}

function Textarea({ value, onChange, placeholder }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      value={ value }
      onChange={ onChange }
      placeholder={ placeholder }
      style={ s.textarea(focused) }
      onFocus={ () => setFocused(true) }
      onBlur={ () => setFocused(false) }
    />
  );
}

// ── Load EmailJS SDK once ──────────────────────────────────────
let emailjsReady = false;

function loadEmailJS() {
  return new Promise((resolve, reject) => {
    if (emailjsReady) return resolve();
    if (document.getElementById('emailjs-sdk')) {
      emailjsReady = true;
      return resolve();
    }
    const script = document.createElement('script');
    script.id  = 'emailjs-sdk';
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.onload = () => {
      window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
      emailjsReady = true;
      resolve();
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

// ── Main modal component ───────────────────────────────────────
export default function ContactModal({ open, onClose }) {
  const [form,    setForm]    = useState(INITIAL);
  const [sending, setSending] = useState(false);
  const [sent,    setSent]    = useState(false);
  const [error,   setError]   = useState('');

  useEffect(() => {
    if (open) loadEmailJS().catch(() => {});
  }, [open]);

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setForm(INITIAL);
        setSent(false);
        setError('');
      }, 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  const set = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }));

  const handleSend = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in your name, email, and message.');
      return;
    }
    setError('');
    setSending(true);

    try {
      await loadEmailJS();

      const templateParams = {
        from_name   : form.name.trim(),
        from_email  : form.email.trim(),
        subject     : form.subject.trim() || `New message from ${ form.name.trim() }`,
        message     : form.message.trim(),
        to_email    : personalInfo.email,
        reply_to    : form.email.trim(),
      };

      await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      setSent(true);
    } catch (err) {
      console.error('EmailJS error:', err);
      setError(
        'Failed to send message. Please email me directly at ' + personalInfo.email
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      style={ s.overlay }
      onClick={ (e) => e.target === e.currentTarget && onClose() }
    >
      <div style={ s.modal }>

        { /* ── Tab-style header ── */ }
        <div style={ s.header }>
          <div style={ s.tabChip }>
            <span>✉</span>
            <span>New Message</span>
          </div>
          <button style={ s.closeBtn } onClick={ onClose } title="Close">✕</button>
        </div>

        { /* ── To: line ── */ }
        <div style={ s.toLine }>
          <span>To:</span>
          <span style={ s.toVal }>{ personalInfo.email }</span>
        </div>

        { /* ── Body ── */ }
        { sent ? (
          <div style={ s.successWrap }>
            <div style={ s.successIcon }>✅</div>
            <div style={ s.successTitle }>Message sent successfully!</div>
            <div style={ s.successSub }>
              Your message has landed in Muttahir's inbox.<br />
              Expect a reply within 24 hours.
            </div>
            <button style={ s.successClose } onClick={ onClose }>Close</button>
          </div>
        ) : (
          <form style={ s.body } onSubmit={ handleSend }>

            <div style={ s.row }>
              <div style={ s.half }>
                <Field label="Your Name *">
                  <Input
                    value={ form.name }
                    onChange={ set('name') }
                    placeholder="John Doe"
                  />
                </Field>
              </div>
              <div style={ s.half }>
                <Field label="Your Email *">
                  <Input
                    type="email"
                    value={ form.email }
                    onChange={ set('email') }
                    placeholder="john@example.com"
                  />
                </Field>
              </div>
            </div>

            <Field label="Subject">
              <Input
                value={ form.subject }
                onChange={ set('subject') }
                placeholder="Job opportunity / Project inquiry / Just saying hi"
              />
            </Field>

            <Field label="Message *">
              <Textarea
                value={ form.message }
                onChange={ set('message') }
                placeholder={ `Hi Muttahir,\n\nI'd like to discuss...` }
              />
            </Field>

            { error && <div style={ s.error }>⚠ { error }</div> }

            <div style={ s.footer }>
              <button type="button" style={ s.cancelBtn } onClick={ onClose }>
                Cancel
              </button>
              <button type="submit" style={ s.sendBtn(sending) } disabled={ sending }>
                { sending ? '⏳ Sending...' : '✉ Send Message' }
              </button>
            </div>

          </form>
        ) }
      </div>
    </div>
  );
}
