import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion, AnimatePresence } from "framer-motion"
import {
  Send,
  CheckCircle2,
  Mail,
  MapPin,
  Loader2,
  AlertCircle,
  ShieldCheck,
} from "lucide-react"
import { OWNER } from "@/utils/constants"
import { SocialLinks } from "@/components/shared/SocialLinks"

// Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z
    .string()
    .min(4, { message: "Subject must be at least 4 characters" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
})

type ContactFormData = z.infer<typeof contactSchema>

export function Contact() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setFormStatus("loading")
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log("Form submission received:", data)
      setFormStatus("success")
      reset()
    } catch (e) {
      console.error(e)
      setFormStatus("error")
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-transparent py-20 md:py-28"
    >
      {/* Cyber Backdrop Decoration */}
      <div className="absolute top-[20%] right-[-10%] -z-10 h-80 w-80 rounded-full bg-primary/5 blur-[90px]" />
      <div className="absolute bottom-[10%] left-[-10%] -z-10 h-72 w-72 rounded-full bg-primary/5 blur-[80px]" />

      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Section Heading - HUD Style */}
        <div className="mb-16 flex flex-col items-center gap-2 text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs font-bold tracking-widest text-primary uppercase"
          >
            [ 05_COMM_LINK ]
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl font-black tracking-tighter text-foreground uppercase sm:text-4xl"
          >
            Contact Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 h-1 bg-secondary shadow-[0_0_10px_var(--secondary)]"
          />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Info Details Column */}
          <div className="flex flex-col justify-between gap-8 lg:col-span-5">
            <div className="space-y-6">
              <h3 className="font-heading text-xl font-black tracking-tighter text-foreground uppercase sm:text-2xl">
                {`> Establish_Link: Project_Inquiry`}
              </h3>
              <p className="font-mono text-base leading-relaxed text-muted-foreground">
                I'm open to freelance work, full-time opportunities, or just
                general collaboration requests. Drop a message!
              </p>

              {/* Direct Details - Data Terminals */}
              <div className="space-y-4">
                <a
                  href={`mailto:${OWNER.email}`}
                  className="group flex items-center gap-4 rounded-none border-2 border-primary/30 bg-card p-4 transition-all duration-300 hover:border-accent hover:bg-accent/5 hover:shadow-[0_0_15px_rgba(255,0,60,0.1)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/40 bg-primary/10 text-primary transition-all duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-background">
                    <Mail size={18} />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-xxs block font-mono tracking-wider text-muted-foreground uppercase group-hover:text-accent">
                      Link_Email
                    </span>
                    <span className="font-mono text-sm font-semibold text-foreground">
                      {OWNER.email}
                    </span>
                  </div>
                </a>

                <div className="group flex items-center gap-4 rounded-none border-2 border-primary/30 bg-card p-4 transition-all duration-300 hover:border-accent hover:bg-accent/5 hover:shadow-[0_0_15px_rgba(255,0,60,0.1)]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/40 bg-primary/10 text-primary transition-all duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-background">
                    <MapPin size={18} />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-xxs block font-mono tracking-wider text-muted-foreground uppercase group-hover:text-accent">
                      Link_Node
                    </span>
                    <span className="font-mono text-sm font-semibold text-foreground">
                      {OWNER.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Panel */}
            <div className="space-y-4 border-t-2 border-primary/30 pt-6">
              <span className="block font-mono text-xs tracking-widest text-primary uppercase">
                SESS_NETWORK_NODE
              </span>
              <SocialLinks variant="default" iconSize={18} className="gap-3" />
            </div>
          </div>

          {/* Form Column - Secure Uplink Terminal */}
          <div className="lg:col-span-7">
            <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-none border-2 border-primary bg-card p-6 shadow-[0_0_30px_rgba(255,0,60,0.1)] sm:p-8">
              {/* System Status Bar */}
              <div className="absolute top-0 right-0 left-0 flex items-center justify-between bg-primary px-4 py-1 font-mono text-[10px] tracking-widest text-background uppercase">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={12} />
                  <span>Secure Uplink Active</span>
                </div>
                <span>Signal: Stable // AES-256</span>
              </div>

              <div className="pt-6">
                <AnimatePresence mode="wait">
                  {formStatus === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center gap-4 py-12 text-center"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-none border-2 border-emerald-500 bg-emerald-500/10 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                        <CheckCircle2 size={32} />
                      </div>
                      <h4 className="mt-2 font-heading text-2xl font-black tracking-tighter text-foreground uppercase">
                        LINK_ESTABLISHED
                      </h4>
                      <p className="max-w-sm font-mono text-sm leading-relaxed text-muted-foreground">
                        Data packet transmitted successfully. Expect a response
                        in your inbox within 24 cycles.
                      </p>
                      <button
                        onClick={() => setFormStatus("idle")}
                        className="mt-6 cursor-pointer rounded-none border-2 border-primary bg-transparent px-5 py-2.5 font-mono text-sm font-black tracking-widest text-primary uppercase transition-all duration-200 hover:bg-primary hover:text-background"
                      >
                        New_Transmission
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-5"
                    >
                      {/* Inputs Row */}
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {/* Name field */}
                        <div className="space-y-1.5">
                          <label
                            htmlFor="name"
                            className="block font-mono text-xs font-bold tracking-widest text-primary uppercase"
                          >
                            USER_NAME
                          </label>
                          <input
                            id="name"
                            type="text"
                            autoComplete="name"
                            className="w-full rounded-none border border-primary/30 bg-muted/20 px-4 py-3 font-mono text-sm text-foreground transition-all duration-200 outline-none focus:border-primary focus:bg-muted/10 focus:shadow-[0_0_10px_rgba(255,0,60,0.2)]"
                            placeholder="John Doe"
                            {...register("name")}
                          />
                          {errors.name && (
                            <span className="text-xxs mt-1 flex items-center gap-1.5 font-mono text-destructive">
                              <AlertCircle size={12} />
                              {errors.name.message}
                            </span>
                          )}
                        </div>

                        {/* Email field */}
                        <div className="space-y-1.5">
                          <label
                            htmlFor="email"
                            className="block font-mono text-xs font-bold tracking-widest text-primary uppercase"
                          >
                            SESS_EMAIL
                          </label>
                          <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            className="w-full rounded-none border border-primary/30 bg-muted/20 px-4 py-3 font-mono text-sm text-foreground transition-all duration-200 outline-none focus:border-primary focus:bg-muted/10 focus:shadow-[0_0_10px_rgba(255,0,60,0.2)]"
                            placeholder="john@example.com"
                            {...register("email")}
                          />
                          {errors.email && (
                            <span className="text-xxs mt-1 flex items-center gap-1.5 font-mono text-destructive">
                              <AlertCircle size={12} />
                              {errors.email.message}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Subject field */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="subject"
                          className="block font-mono text-xs font-bold tracking-widest text-primary uppercase"
                        >
                          SESS_SUBJECT
                        </label>
                        <input
                          id="subject"
                          type="text"
                          className="w-full rounded-none border border-primary/30 bg-muted/20 px-4 py-3 font-mono text-sm text-foreground transition-all duration-200 outline-none focus:border-primary focus:bg-muted/10 focus:shadow-[0_0_10px_rgba(255,0,60,0.2)]"
                          placeholder="Project Partnership / Job Opportunity"
                          {...register("subject")}
                        />
                        {errors.subject && (
                          <span className="text-xxs mt-1 flex items-center gap-1.5 font-mono text-destructive">
                            <AlertCircle size={12} />
                            {errors.subject.message}
                          </span>
                        )}
                      </div>

                      {/* Message field */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="message"
                          className="block font-mono text-xs font-bold tracking-widest text-primary uppercase"
                        >
                          SESS_DATA_PACKET
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          className="w-full resize-none rounded-none border border-primary/30 bg-muted/20 px-4 py-3 font-mono text-sm text-foreground transition-all duration-200 outline-none focus:border-primary focus:bg-muted/10 focus:shadow-[0_0_10px_rgba(255,0,60,0.2)]"
                          placeholder="Hi Aldo, I'd love to chat about building a SaaS application..."
                          {...register("message")}
                        />
                        {errors.message && (
                          <span className="text-xxs mt-1 flex items-center gap-1.5 font-mono text-destructive">
                            <AlertCircle size={12} />
                            {errors.message.message}
                          </span>
                        )}
                      </div>

                      {/* Submission Button */}
                      <button
                        type="submit"
                        disabled={formStatus === "loading"}
                        className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-none bg-primary px-6 py-3.5 font-mono text-sm font-black tracking-widest text-background uppercase transition-all duration-200 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {formStatus === "loading" ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            Transmitting...
                          </>
                        ) : (
                          <>
                            <Send
                              size={16}
                              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                            Transmit_Data
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
