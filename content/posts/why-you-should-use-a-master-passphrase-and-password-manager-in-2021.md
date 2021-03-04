---
title: "Why You Should Use a Master Passphrase and Password Manager in 2021"
description: "Avoid using the same password for everything (like I did)"
tags: ["authentication", "policy", "security"]
date: 2021-03-02
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

A few years ago, both my primary email address and _*only*_ password at the time were compromised through the massive [MyFitnessPal data breach](https://content.myfitnesspal.com/security-information/FAQ.html). It was the same password I used across >30 important online accounts, which doesn't seem like whole lot on paper -- but I did not have a good time having to change my password for every account.

According to [NIST](https://pages.nist.gov/800-63-3/sp800-63b.html#5111-memorized-secret-authenticators) guidelines, my password at the time was moderately strong in length. In addition, it was hashed with a `salt`<sup>[1](#1)</sup> using an industry-standard cryptographic hashing algorithm called [Bcrypt](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#modern-algorithms). Theoretically, this password _*should*_ be impossible to crack, given the benefit that best password security practices were enforced. But it is always safe to assume the worst, or that some of these practices fell through the cracks.

Even large OAuth or third-party sign-on providers like [Google](https://cloud.google.com/blog/products/g-suite/notifying-administrators-about-unhashed-password-storage) and [Facebook](https://about.fb.com/news/2019/03/keeping-passwords-secure/) have openly admitted (and mitigated) storing their user passwords in `plain-text`.

Regarding risk management, **it is a matter of time before an accident involving your password will occur.** [See if your email/password has been involved in a data breach.](https://haveibeenpwned.com/)

Keep reading to see justification for the proposed solution, or just check out the solution [here](#solution).

## Compromised Password Scenarios

For easy example purposes, we'll be using MD5 (which should never be used for real-world password hashing) to demonstrate hashing in the scenarios below:

1. A `plain-text password` is human-readable, and is presumed to be mapped with an email address in the breached database. In the events with Google and Facebook, they did not experience a _*known*_ data breach and remediated accordingly -- but be advised this method of password storage occurs way more than it should.

```
email@email.com <-- your email
hunter2 <-- a plain-text password next to the email
```

2. A `hashed password` may not have a random `salt` (or any `salt` at all), or not have a high hashing `cost`<sup>[2](#2)</sup>. It is impossible to passively learn this information unless provided externally by the organization which in itself is a security risk for them; meaning there's no guarantee your password is being stored properly.

```
2ab96390c7dbe3439de74d0c9b0b1767 <-- "hunter2" hash; vulnerable to dictionary and/or brute force attack


******** <-- unknown unique random salt
*** <-- unkown cost
8199618da3d1958f5a61563a2359ceac <-- "********_***_hunter2" hash with salt; more difficult to crack since salt and cost is unknown
```

3. **The database containing both the `salt` and `hash` (normally stored together within the same dataset) is compromised. In this case, [what most likely happened with MyFitnessPal](https://www.theregister.com/2019/02/11/620_million_hacked_accounts_dark_web/), making it feasible to crack your password if it's not moderately strong**

```
2ab96390c7dbe3439de74d0c9b0b1767 <-- "hunter2" password identified through some attack

5@qG2%V <-- salt identified
$10 <-- cost identified
8199618da3d1958f5a61563a2359ceac <-- "5@qG2%V_$10_hunter2" can be cracked with known salt and cost
```

In the case of any organization -- there is only so much they can do to protect your login credentials (e.g. enforcing password policies, securing databases, secure connection) before the responsibility falls on the individual to just be mildly aware to change their password after a known data breach via news, email notice, or this [site that uses aggregated email/passwords dumps to check if your data has been compromised.](https://haveibeenpwned.com/)

## Security vs Usability

Aside from a scenario like the aforementioned data breach -- it can be frustrating in itself to be forced by others to abide by minimum password requirements, in order access an app, service, or just get into your work account -- and it comes down to the passsword policy for each verifier.

Verifiers (e.g. an organization) prioritize `security over usability` through these password policies, to help influence stronger passwords, while subscribers (e.g. the users) prioritize `usability over security` to just speed run past the login screen.

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

All of which, to include some other variation of `Password1!` that uses a different word or phrase (e.g. `Seattle!1`), would be cracked in a matter of seconds.

It is a continuous challenge for verifiers and subscribers to compromise over the right balance between security and usability, but there is an simplier way to resolve this issue through leveraging existing password techniques/utilities.

## Solution

### Use a password manager

Using a _*dedicated*_ password manager like [Bitwarden](https://bitwarden.com/) would help:

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
tqnRui5\*
```

Entropy<sup>[3](#3)</sup> for this is `53 bits` or `95^8` possible password combinations. It's still a reasonably strong password, but can be theoretically cracked within a few hours. You can see an estimated calculation [here](https://www.security.org/how-secure-is-my-password/).

## Conclusion

**Avoid reusing the same password(s) to better protect your online identity when the next data breach happens**. Fulfilling minimum password requirements such as minimum length and complexity already takes away cumulative time and effort away from your workflow; `usability over security` is prioritized in that case. But instead of deciding between the two, **experience the best of `usability and security` by using a master passphrase with a password manager.** The free version of [Bitwarden](https://bitwarden.com/) is solid app/service as both a passphrase/password generator and manager.

## Footnotes

<sup id="1">1</sup> [OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#salting) defines **salt** as a unique, randomly generated string that is added to each password. [Dan Arias](https://auth0.com/blog/adding-salt-to-hashing-a-better-way-to-store-passwords/) of Auth0, and [Baeldung](https://www.baeldung.com/java-password-hashing), each wrote an in-depth yet approachable article about password hashing with a salt.

<sup id="2">2</sup> **Cost** is the measure to figure out the x amount of iterations, or rounds, that a hashing algorithms is invoked over a password string. The default cost for Bcrypt is `10` or `10^2 == 1024 rounds` of hashing.

<sup id="3">3</sup> **Entropy** is a measurement of how strong a password is; or how unpredictable it is to guess. The formula to calculate entropy bits is `log_2(S^L)`, where `S` is the size of a character set, and `L` is the password length. One example would be that a non-dictionary lowercase alphabet (a-z) password with 8 characters has an entropy of `log_2(26^8) == 38 bits` or up to `26^8 == 300 million` possible password combinations. Sounds like a lot (it is for desktop login), but consider that this password can be [theoretically be cracked in 50 minutes](https://security.stackexchange.com/a/182116)
