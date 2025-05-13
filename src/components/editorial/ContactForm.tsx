
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to a backend
    toast({
      title: "Form submitted",
      description: "Thank you for reaching out. An attorney will contact you shortly.",
    });
  };

  return (
    <section id="contact-form" className="scroll-mt-16 my-12 bg-white shadow-lg rounded-lg p-6 md:p-8">
      <h2 className="text-2xl font-serif font-bold text-bennett-navy mb-6">Get a Free Case Evaluation</h2>
      
      <p className="text-bennett-slate mb-6">
        If you believe you've been a victim of solar panel fraud, our experienced attorneys are ready to review your case. 
        Complete the form below for a confidential consultation.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" required placeholder="Your first name" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" required placeholder="Your last name" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required placeholder="Your email address" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" required placeholder="Your phone number" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="issue">Briefly describe your situation</Label>
          <Textarea 
            id="issue" 
            required 
            placeholder="Please describe your experience with the solar company, including any specific issues or concerns..."
            className="min-h-[120px]"
          />
        </div>
        
        <div className="pt-2">
          <Button 
            type="submit" 
            className="w-full md:w-auto bg-bennett-navy hover:bg-bennett-navy/90 text-white"
            size="lg"
          >
            Submit Your Case
          </Button>
          
          <p className="text-sm text-gray-500 mt-4">
            By submitting this form, you agree to our privacy policy. Your information will remain confidential and will only be used to evaluate your potential case.
          </p>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
