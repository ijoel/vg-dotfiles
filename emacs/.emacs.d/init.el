(require 'package)
(add-to-list 'package-archives
	     '("melpa" . "https://melpa.org/packages/"))
(package-initialize)
(unless package-archive-contents
  (package-refresh-contents))

(let ((default-directory  "~/.emacs.d/libs/"))
  (normal-top-level-add-to-load-path '("."))
  (normal-top-level-add-subdirs-to-load-path))

(load-theme 'solarized-dark t)

(menu-bar-mode -1)
(toggle-scroll-bar -1)
(tool-bar-mode -1)
(setq ring-bell-function 'ignore)

(which-key-mode 1)

(setq inhibit-startup-screen t)
(add-hook 'after-init-hook 'dired-jump)

(global-set-key (kbd "M-x") 'helm-M-x)

(ido-mode 1)

(show-paren-mode 1)
(electric-pair-mode 1)

(add-to-list 'load-path
	     "~/.emacs.d/plugins/yasnippet")
(require 'yasnippet)
(yas-global-mode 1)

(require 'general)

(setq evil-collection-setup-minibuffer t)
(setq evil-want-keybinding nil)
(when (require 'evil-collection nil t)
  (evil-collection-init))

(unless (package-installed-p 'evil)
  (package-install 'evil))

(require 'evil)
(evil-mode 1)

(require 'evil-org)
(add-hook 'org-mode-hook 'evil-org-mode)
(evil-org-set-key-theme '(navigation insert textobjects additional calendar))
(require 'evil-org-agenda)
(evil-org-agenda-set-keys)

(org-babel-do-load-languages
   'org-babel-load-languages
   '(
     (python . t)
     (haskell . t)
     (octave . t)
     (latex . t)
)
   )


(require 'org-bullets)
(add-hook 'org-mode-hook (lambda () (org-bullets-mode 1)))

(add-to-list 'org-file-apps '("\\.pdf\\'" . emacs))
(setq org-noter-always-create-frame nil)

(require 'calctex)
(add-hook 'calc-embedded-new-formula-hook 'calctex-mode)

(setq org-todo-keywords
	'((sequence "TODO(t)"
		    "ACTIVE(a)"
		    "NEXT(n)"
		    "|"
		    "DONE(d@)"
		    "CANCELLED(c@)"
		    )))

  (setq org-agenda-files
	  '("~/project_management"))

(defun org-make-todo ()
  (interactive)
  (org-todo)
  (org-priority)
  (org-set-effort))

(setq org-priority-highest 1)
(setq org-priority-default 5)
(setq org-priority-lowest 10)

(setq org-agenda-start-with-log-mode t)
(setq org-log-into-drawer t)

(require 'dired-x)
(use-package all-the-icons-dired
  :hook (dired-mode . all-the-icons-dired-mode))


(use-package dired-hide-dotfile
  :hook (dired-mode . dired-hide-dotfiles-mode))

(require 'ebuku)
(require 'evil-collection-ebuku)

(add-hook 'ebuku-mode-hook 'evil-collection-ebuku-setup)

(use-package pdf-tools
    :mode (("\\.pdf\\'" . pdf-view-mode))
    :config
    (progn
      (pdf-tools-install))
    )

(add-hook 'pdf-view-mode-hook 'pdf-view-midnight-minor-mode)

(add-to-list 'auto-mode-alist '("\\.m\\'" . octave-mode))

(general-create-definer my-leader-def
			  :prefix "SPC")

  (my-leader-def
   :states 'normal
   :keymaps 'override
    "<SPC>" 'helm-M-x
    "!" 'shell-command
    "p" 'package-install
    "o" 'inferior-octave
    "d" 'dired
    "h" 'dired-hide-dotfiles-mode
    "t" 'toggle-truncate-lines
    "j" 'dired-jump
    "T" 'org-babel-tangle
    "RET" 'vterm
    "b" 'switch-to-buffer
    "a" 'org-agenda
    "g" 'pdf-view-goto-page
    "H" 'split-window-horizontally
    "V" 'split-window-vertically
    "c" 'calc-dispatch)

  (general-create-definer org-leader-def
    :prefix ",")

  (org-leader-def
   :states 'normal
   :keymaps 'org-mode-map
   "l" 'org-latex-preview
   "n" 'org-noter
   "s" 'org-schedule
   "c" 'org-todo
   "t" 'org-make-todo
   "e" 'org-export-dispatch
   "p" 'org-priority)

  (general-create-definer nested-leader-def
    :prefix "SPC f")

  (nested-leader-def
   :states 'normal
   :keymaps 'override
   "j" 'dired-jump
   "r" 'helm-recentf
   "f" 'helm-find-files)

  (global-set-key (kbd "M-b") 'ebuku)
  (global-set-key (kbd "M-C-r") 'restart-emacs)
  (global-set-key (kbd "M-d") (lambda() (interactive)(find-file "~/.emacs.d/README.org")))
  (global-set-key (kbd "M-t") (lambda() (interactive)(find-file "~/project_management/emacs.org")))

  (global-set-key (kbd "M-m") 'which-key-show-major-mode)

(add-hook 'dired-mode-hook
	  (lambda () (local-set-key (kbd "C-+") #'dired-create-empty-file)))

;; CUSTOM VARIABLES
(custom-set-variables
 ;; custom-set-variables was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(custom-safe-themes
   '("0fffa9669425ff140ff2ae8568c7719705ef33b7a927a0ba7c5e2ffcfac09b75" default))
 '(package-selected-packages
   '(evil-collection openwith sequences cl-lib-highlight helm-system-packages async-await popup-complete helm-fuzzy-find evil-space yapfify yaml-mode ws-butler winum which-key web-mode web-beautify vterm volatile-highlights vi-tilde-fringe uuidgen use-package toc-org tagedit spaceline solarized-theme slim-mode scss-mode sass-mode restart-emacs request rainbow-delimiters pyvenv pytest pyenv-mode py-isort pug-mode pspp-mode popwin pip-requirements persp-mode pcre2el paradox org-projectile-helm org-present org-pomodoro org-mime org-download org-bullets open-junk-file neotree move-text mmm-mode markdown-toc magit macrostep lorem-ipsum livid-mode live-py-mode linum-relative link-hint json-mode js2-refactor js-doc intero indent-guide hy-mode hungry-delete htmlize hlint-refactor hl-todo hindent highlight-parentheses highlight-numbers highlight-indentation helm-themes helm-swoop helm-pydoc helm-projectile helm-mode-manager helm-make helm-hoogle helm-flx helm-descbinds helm-css-scss helm-ag haskell-snippets gruvbox-theme google-translate golden-ratio gnuplot gh-md flx-ido fill-column-indicator fancy-battery eyebrowse expand-region exec-path-from-shell evil-visualstar evil-visual-mark-mode evil-unimpaired evil-tutor evil-surround evil-search-highlight-persist evil-numbers evil-nerd-commenter evil-mc evil-matchit evil-lisp-state evil-indent-plus evil-iedit-state evil-exchange evil-escape evil-ediff evil-args evil-anzu eval-sexp-fu emmet-mode elisp-slime-nav dumb-jump diminish define-word cython-mode csv-mode company-ghci company-ghc column-enforce-mode coffee-mode cmm-mode clean-aindent-mode auto-highlight-symbol auto-compile auctex-latexmk anaconda-mode aggressive-indent adaptive-wrap ace-window ace-link ace-jump-helm-line))
 '(truncate-lines nil))

(custom-set-faces
 ;; custom-set-faces was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 )
