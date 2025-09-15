import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Shield, Heart } from "lucide-react";
import { useState } from "react";

const PartnersDonate = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: formRef, isVisible: formVisible } = useScrollReveal();
  
  const [selectedAmount, setSelectedAmount] = useState("50");
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");

  const predefinedAmounts = ["25", "50", "100", "250", "500"];

  const handleAmountSelect = (amount: string) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount("");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-forest-dark via-forest-medium to-forest-light">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <div ref={titleRef} className={`transition-all duration-1000 ease-out ${
            titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <Heart className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Make a <span className="text-accent">Donation</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Support forest conservation and community empowerment in Uganda. Every donation helps protect our planet's future.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div ref={formRef} className={`max-w-4xl mx-auto transition-all duration-1000 ease-out ${
            formVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Donation Amount Selection */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">Choose Your Impact</CardTitle>
                    <CardDescription>Select an amount or enter a custom donation</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Predefined Amounts */}
                    <div className="grid grid-cols-3 gap-3">
                      {predefinedAmounts.map((amount) => (
                        <Button
                          key={amount}
                          variant={selectedAmount === amount ? "default" : "outline"}
                          className="h-12 text-lg"
                          onClick={() => handleAmountSelect(amount)}
                        >
                          ${amount}
                        </Button>
                      ))}
                    </div>
                    
                    {/* Custom Amount */}
                    <div className="space-y-2">
                      <Label htmlFor="custom-amount">Custom Amount (USD)</Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                        <Input
                          id="custom-amount"
                          type="number"
                          placeholder="Enter amount"
                          className="pl-8"
                          value={customAmount}
                          onChange={(e) => handleCustomAmountChange(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Impact Information */}
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Your Impact:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• $25 plants 10 native trees</li>
                        <li>• $50 provides clean water for a family</li>
                        <li>• $100 trains a community leader</li>
                        <li>• $250 protects 1 acre of forest</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Payment Information */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">Payment Details</CardTitle>
                    <CardDescription>Choose your preferred payment method</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Payment Method Selection */}
                    <div className="space-y-4">
                      <Label>Payment Method</Label>
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                        <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-accent/5">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="flex items-center space-x-2 cursor-pointer">
                            <CreditCard className="w-5 h-5" />
                            <span>Credit/Debit Card</span>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-accent/5">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label htmlFor="paypal" className="cursor-pointer">
                            PayPal
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Card Payment Form */}
                    {paymentMethod === "card" && (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="card-name">Cardholder Name</Label>
                          <Input id="card-name" placeholder="John Doe" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="card-number">Card Number</Label>
                          <Input id="card-number" placeholder="1234 5678 9012 3456" />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="your@email.com" />
                        </div>
                      </div>
                    )}

                    {/* PayPal Payment */}
                    {paymentMethod === "paypal" && (
                      <div className="text-center py-8">
                        <div className="space-y-4">
                          <div className="text-muted-foreground">
                            You'll be redirected to PayPal to complete your donation
                          </div>
                          <Button className="w-full bg-[#0070ba] hover:bg-[#005ea6] text-white">
                            Continue with PayPal
                          </Button>
                        </div>
                      </div>
                    )}

                    <Separator />

                    {/* Security Notice */}
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Shield className="w-4 h-4" />
                      <span>Your payment information is secure and encrypted</span>
                    </div>

                    {/* Donate Button */}
                    {paymentMethod === "card" && (
                      <Button className="w-full" size="lg">
                        Donate ${customAmount || selectedAmount || "0"}
                      </Button>
                    )}
                  </CardContent>
                </Card>

                {/* Tax Information */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-sm text-muted-foreground space-y-2">
                      <p className="font-semibold">Tax Deductible Donation</p>
                      <p>Good Forests Foundation is a registered 501(c)(3) nonprofit organization. Your donation is tax-deductible to the full extent allowed by law.</p>
                      <p>Tax ID: 12-3456789</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnersDonate;