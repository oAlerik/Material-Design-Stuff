import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

export const Animations = {
  contentFade: trigger("fadeInState", [
    state(
      "show",
      style({
        opacity: 1,
        transform: "translateY(-7.5%)"
      })
    ),
    state(
      "hide",
      style({
        opacity: 0,
        transform: "translateY(0%)"
      })
    ),
    transition("show => hide", animate("500ms ease")),
    transition("hide => show", animate("500ms ease"))
  ])
};
