import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";

interface ServiceInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

const servicesList = [
  "General Inquiry",
  "Visa Application",
  "Flight Booking",
  "Work Permit",
  "Hajj & Umrah",
  "Tourist Visa",
  "Student Visa",
  "VFS Appointment",
  "Verification Letter",
  "South Africa Tours",
  "Mobile Phones & Accessories",
  "Other"
];

const ServiceInquiryModal = ({ isOpen, onClose, initialService }: ServiceInquiryModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    if (isOpen) {
      // If initialService provided, try to match it or default to "General Inquiry" or "Other" logic
      // Ideally, if initialService is not in the list, we can set it, but Select works best with exact matches.
      // We'll try to match exact or default to empty so placeholder shows, or set it if it exists.
      if (initialService && servicesList.includes(initialService)) {
         setFormData(prev => ({ ...prev, subject: initialService }));
      } else if (initialService) {
         // If generic service not in list, maybe map to "Other" or "General Inquiry"
         setFormData(prev => ({ ...prev, subject: "General Inquiry" })); 
      } else {
         setFormData(prev => ({ ...prev, subject: "" }));
      }
    }
  }, [isOpen, initialService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      submissionData.append(key, value);
    });
    // Add required hidden fields for FormSubmit
    submissionData.append("_subject", `New Inquiry: ${formData.subject}`);
    submissionData.append("_template", "table");
    submissionData.append("_captcha", "false");

    try {
      const response = await fetch("https://formsubmit.co/ajax/baselsayed@snbtravel.net", {
        method: "POST",
        body: submissionData,
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We have received your request and will contact you shortly.",
        });
        setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
        onClose();
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or contact us on WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto p-6 md:p-8">
        <DialogHeader className="mb-6 text-left">
          <DialogTitle className="font-serif text-3xl font-bold text-foreground">Send us a Message</DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
             Fill out the form below and we will get back to you with a quote or consultation.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Your Name <span className="text-red-500">*</span>
              </label>
              <Input 
                id="name" 
                name="name" 
                required 
                placeholder="John Doe" 
                value={formData.name}
                onChange={handleChange}
                className="bg-background"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-foreground">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <Input 
                id="phone" 
                name="phone" 
                required 
                placeholder="+27 XX XXX XXXX" 
                type="tel" 
                value={formData.phone}
                onChange={handleChange}
                className="bg-background"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email Address <span className="text-red-500">*</span>
            </label>
            <Input 
              id="email" 
              name="email" 
              required 
              placeholder="john@example.com" 
              type="email" 
              value={formData.email}
              onChange={handleChange}
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-foreground">
              Subject <span className="text-red-500">*</span>
            </label>
            <Select name="subject" value={formData.subject} onValueChange={handleSelectChange}>
              <SelectTrigger className="bg-background w-full">
                <SelectValue placeholder="Select a service..." />
              </SelectTrigger>
              <SelectContent>
                {servicesList.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              Your Message <span className="text-red-500">*</span>
            </label>
            <Textarea 
              id="message" 
              name="message" 
              placeholder="Tell us about your travel needs..." 
              required
              className="min-h-[120px] bg-background resize-none"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="pt-2">
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 text-base" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceInquiryModal;
