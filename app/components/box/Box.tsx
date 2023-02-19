import { cva, cx, type VariantProps } from "class-variance-authority";

export type BoxVariantProps = VariantProps<typeof root>;

export const root = cva([""], {
  variants: {
    padding: {
      1: "p-1",
      2: "p-2",
      3: "p-3",
      4: "p-4",
      5: "p-5",
      6: "p-6",
      7: "p-7",
      8: "p-8",
      9: "p-9",
      10: "p-10",
      11: "p-11",
      12: "p-12",
      14: "p-14",
      16: "p-16",
      20: "p-20",
      24: "p-24",
      28: "p-28",
      32: "p-32",
      36: "p-36",
      40: "p-40",
      44: "p-44",
      48: "p-48",
      52: "p-52",
      56: "p-56",
      60: "p-60",
      64: "p-64",
      72: "p-72",
      80: "p-80",
      96: "p-96",
    },
  },
});

export interface BoxProps extends BoxVariantProps {
  className?: string;
  children: React.ReactNode;
}

export default function Box({ className, children, padding }: BoxProps) {
  return <div className={cx(className, root({ padding }))}>{children}</div>;
}
