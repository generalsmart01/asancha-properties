"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calculator, RotateCcw } from "lucide-react";
import { Slider } from "../ui/slider";

interface ReturnsCalculatorProps {
    initialPrice: number;
}

export default function ReturnsCalculator({ initialPrice }: ReturnsCalculatorProps) {
    const [purchasePrice, setPurchasePrice] = useState(initialPrice);
    const [interestRate, setInterestRate] = useState(5.0);
    const [ltv, setLtv] = useState(75);

    const [monthlyMortgage, setMonthlyMortgage] = useState(0);

    // Constants (could be passed as props eventually)
    const deposit = (purchasePrice * (100 - ltv)) / 100;
    const loanAmount = purchasePrice - deposit;

    useEffect(() => {
        // Interest only mortgage calculation: (Loan Amount * Rate) / 12
        const annualInterest = loanAmount * (interestRate / 100);
        setMonthlyMortgage(annualInterest / 12);
    }, [purchasePrice, interestRate, ltv]);

    const handleReset = () => {
        setPurchasePrice(initialPrice);
        setInterestRate(5.0);
        setLtv(75);
    };

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
            maximumFractionDigits: 0,
        }).format(val);
    };

    return (
        <div className="bg-card p-8 rounded-[2.5rem] shadow-xl border border-border/50">
            <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Calculator size={20} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Calculate Your Returns</h3>
            </div>

            <p className="text-sm text-muted-foreground mb-8">
                Move the sliders to understand the financials based on your circumstances.
            </p>

            <div className="space-y-8">
                {/* Purchase Price */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Purchase Price</label>
                        <span className="text-lg font-black text-foreground">{formatCurrency(purchasePrice)}</span>
                    </div>
                    <Slider
                        value={[purchasePrice]}
                        min={50000}
                        max={1000000}
                        step={1000}
                        onValueChange={(val: number[]) => setPurchasePrice(val[0])}
                        className="py-2"
                    />
                </div>

                {/* Interest Rate */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Interest Rate</label>
                        <span className="text-lg font-black text-foreground">{interestRate.toFixed(1)}%</span>
                    </div>
                    <Slider
                        value={[interestRate]}
                        min={0.5}
                        max={10.0}
                        step={0.1}
                        onValueChange={(val: number[]) => setInterestRate(val[0])}
                        className="py-2"
                    />
                </div>

                {/* Loan To Value */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Loan To Value</label>
                        <span className="text-lg font-black text-foreground">{ltv}%</span>
                    </div>
                    <Slider
                        value={[ltv]}
                        min={0}
                        max={100}
                        step={5}
                        onValueChange={(val: number[]) => setLtv(val[0])}
                        className="py-2"
                    />
                    <div className="flex justify-between text-[10px] text-muted-foreground uppercase font-bold tracking-widest px-1">
                        <span>0%</span>
                        <span>100%</span>
                    </div>
                </div>

                {/* Results */}
                <div className="pt-6 border-t border-border mt-6">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold text-muted-foreground">Deposit Required</span>
                        <span className="text-base font-black text-foreground">{formatCurrency(deposit)}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold text-muted-foreground">Mortgage Amount</span>
                        <span className="text-base font-black text-foreground">{formatCurrency(loanAmount)}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-primary/5 rounded-2xl border border-primary/10 mt-4">
                        <span className="text-sm font-bold text-primary uppercase tracking-wider">Monthly Payment</span>
                        <span className="text-xl font-black text-primary">{formatCurrency(monthlyMortgage)}</span>
                    </div>
                </div>

                <Button
                    onClick={handleReset}
                    variant="outline"
                    className="w-full h-12 rounded-xl text-muted-foreground hover:text-foreground font-bold"
                >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Reset Values
                </Button>
            </div>
        </div>
    );
}
