---
title: "Why You Should Use a Master Passphrase and Password Manager in 2021"
description: "Avoid using one password for everything (like I did)"
tags: ["authentication", "policy", "security"]
date: 2021-02-23
---

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Compromised Password Scenarios](#compromised-password-scenarios)
- [Security vs Usability](#security-vs-usability)
- [Solution](#solution)
  - [Use a password manager](#use-a-password-manager)
  - [Use a master passphrase (for your password manager)](#use-a-master-passphrase-for-your-password-manager)
- [Conclusion](#conclusion)
- [Footnotes](#footnotes)

## Introduction

A few years ago, both my primary email address and _only_ password at the time (used with >30 of my other online accounts) were stolen through the massive [MyFitnessPal data breach](https://content.myfitnesspal.com/security-information/FAQ.html).

According to [NIST](https://pages.nist.gov/800-63-3/sp800-63b.html#5111-memorized-secret-authenticators) guidelines, my password was moderately strong in length. In addition, it was hashed with a `salt`<sup>[1](#1)</sup> using the industry-standard cryptographic hashing algorithm called [Bcrypt](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#modern-algorithms). Theoretically, this password _should_ be impossible to crack, given the benefit best password security practices were followed. But it is always safe to assume the worst, or that they didn't.

Even large OAuth or third-party sign-on providers like [Google](https://cloud.google.com/blog/products/g-suite/notifying-administrators-about-unhashed-password-storage) and [Facebook](https://about.fb.com/news/2019/03/keeping-passwords-secure/) have been honest with (and mitigated) storing their user passwords in `plain-text`. **Regarding risk management, mistakes or accidents do eventually happen even today.**

## Compromised Password Scenarios

1. A `plain-text password` is human-readable, and is presumed to be mapped with your email address in the breached database. In the events with Google and Facebook, they did not experience a known data breach here; they just internally caught and mitigated the issue.
2. A `hashed password` may not have a random `salt` (or any `salt` at all), or not have a high default hashing `cost`<sup>[2](#2)</sup>. It is impossible to passively learn this information unless provided externally by the organization which in itself is a security risk for them.
3. The database containing both the `salt` and `hash` (normally stored together within the same dataset) is compromised, despite using a hashing algorithm like Bcrypt. In this instance, [what most likely happened with MyFitnessPal](https://www.theregister.com/2019/02/11/620_million_hacked_accounts_dark_web/)

In the case of any organization -- there is only so much they can do to protect your login credentials (e.g. enforcing password policies, securing databases, secure connection) before that responsibility falls on the individual to follow their own best password practices.

## Security vs Usability

It can be frustrating to be forced into abiding by minimum password requirements to use an app, service, or just get into your work account.

Verifiers (e.g. an organization) prioritize security over usability through password policies to help influence more secure passwords, while subscribers (e.g. the users) prioritize usability over security to just speed run past the login screen.

The result of this abrasive arrangement between verifiers and subscribers can lead to these type of passwords:

```
Password1!
```

Or the [Top 200 most common passwords in 2020](https://nordpass.com/most-common-passwords-list/), the top five passwords being:

> 1. 123456
> 2. 123456789
> 3. picture1
> 4. password
> 5. 12345678

All of which, including some other variation of `Password1!` that uses a different word or phrase, would be cracked in a matter of seconds.

## Solution

### Use a password manager

Using a _dedicated_ password manager like [Bitwarden](https://bitwarden.com/) would help:
- Store all your login credentials (much like how the saved login function works on your phone or browser)
- Store encrypted secure notes on the cloud (e.g. using it as running CV to remember mailing addresses, or to track subscriptions you're signed up for)
- Auto-fill login credentials across multiple desktop/mobile with Bitwarden installed
- Generate a random secure password for each account you own, if you do decide to change a password on your next login for that account.

Aside from the listed benefits, the main purpose of having a password manager in the context of this write up is to **have an easy way of generating and accessing a burner password for each account to include:**
- At least a minimum of 12 characters (you won't be memorizing these passwords, so go for more if you would like to)
- Include all character sets provided in the password generation (e.g. A-Z, a-z, 0-9, special characters)
- Include a number and special character minimum, and avoid ambiguous characters

### Use a master passphrase (for your password manager)

[Diceware](https://diceware.dmuth.org/) or the [Bitwarden Password Generator](https://bitwarden.com/password-generator/) (a feature built-in to the actual application) can generate a **passphrase** like this:

```
Easeful-Giving-Reseal-Fiddle
```

Entropy<sup>[3](#3)</sup> for the above passphrase is calculated to `184 bits` or `95^28` possible password combinations (basically it's uncrackable even beyond heat death of the universe).

One could even create their own **memorable passphrase** to include a number and special character:
```
Pizza-Beer-Marvel-Avengers-$3.50
```

In contrast to passphrases, this is a password that meets the minimum of at least:
- 8 characters in length
- An upper and lowercase character
- A special character
- No words or phrases

```
tqnRui5*
```
Entropy<sup>[3](#3)</sup> for this is `53 bits` or `95^8` possible password combinations. It's still a reasonably strong password, but can be theoretically cracked within a few hours. You can see an estimated calculation [here](https://www.security.org/how-secure-is-my-password/).

## Conclusion
**Avoid reusing a password**. Fulfilling password requirements such as minimum length and complexity takes unwanted time and effort away from your day. **Use a master passphrase with a password manager instead; have the best of both worlds in security and usability.**



## Footnotes

<sup id="2">1</sup> [OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#salting) defines **salt** as a unique, randomly generated string that is added to each password. [Dan Arias](https://auth0.com/blog/adding-salt-to-hashing-a-better-way-to-store-passwords/) of Auth0, and [Baeldung](https://www.baeldung.com/java-password-hashing), each wrote an in-depth yet approachable article about password hashing with a salt.

<sup id="2">2</sup> **Cost** is the measure to figure out the x amount of iterations, or rounds, that a hashing algorithms is invoked over a password string. The default cost for Bcrypt is `10` or `10^2 == 1024 rounds` of hashing.

<sup id="2">3</sup> **Entropy** is a measurement of how strong a password is; or how unpredictable it is to guess. The formula to calculate entropy bits is `log_2(S^L)`, where `S` is the size of a character set, and `L` is the password length. One example would be that a non-dictionary lowercase alphabet (a-z) password with 8 characters has an entropy of `log_2(26^8) == 38 bits` or up to `26^8 == 300 million` possible password combinations. Sounds like a lot (it is for desktop login), but consider that this password can be [theoretically be cracked in 50 minutes](https://security.stackexchange.com/a/182116)