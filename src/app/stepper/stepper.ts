import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface StepperOption {
  value: number;
  label: string;
}

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.html',
  styleUrl: './stepper.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export default class StepperComponent {
  readonly desktopOptions: StepperOption[] = [
    { value: 0, label: 'Trifft nicht zu' },
    { value: 1, label: 'Trifft eher nicht zu' },
    { value: 2, label: 'Trifft teilweise zu' },
    { value: 3, label: 'Trifft eher zu' },
    { value: 4, label: 'Trifft zu' },
  ];

  readonly mobileOptions: StepperOption[] = [
    { value: 0, label: 'Trifft nicht zu' },
    { value: 1, label: 'Trifft teilweise zu' },
    { value: 2, label: 'Trifft zu' },
  ];

  readonly desktopSelected = signal(2);
  readonly mobileSelected = signal(1);
  readonly sliderDesktopValue = signal(50);
  readonly sliderMobileValue = signal(50);

  selectDesktopOption(value: number): void {
    this.desktopSelected.set(value);
  }

  selectMobileOption(value: number): void {
    this.mobileSelected.set(value);
  }

  onDesktopSliderChange(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    this.sliderDesktopValue.set(value);
  }

  onMobileSliderChange(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    this.sliderMobileValue.set(value);
  }
}
