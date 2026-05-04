---
title: GitLab group labels
description: Set up GitLab group labels for origin, priority, status, and type using glab CLI.
created: 2026-03-12
updated: 2026-04-14
---

Setup group labels for GitLab using [glab](https://gitlab.com/gitlab-org/cli) CLI.

First, get the group ID:

```bash
GROUP_ID=$(glab api "groups?search=testomato" | python3 -c "import sys,json; print(json.load(sys.stdin)[0]['id'])")
```

## Origin

```bash
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Origin: From customer ♥" -f "color=#9400d3" -f "description=Requested by a customer"
```

## Priority

```bash
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Priority: Critical" -f "color=#DC2626" -f "description=Must be resolved immediately"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Priority: High" -f "color=#F97316" -f "description=Should be resolved soon"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Priority: Medium" -f "color=#F59E0B" -f "description=Normal priority, plan for upcoming cycle"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Priority: Low" -f "color=#9CA3AF" -f "description=Nice to have, no rush"
```

## Status

```bash
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Status: In Progress" -f "color=#2563EB" -f "description=Currently being worked on"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Status: Confirmed" -f "color=#0EA5E9" -f "description=Verified and ready to be worked on"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Status: Review Needed" -f "color=#8B5CF6" -f "description=Ready for code review"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Status: Feedback Needed" -f "color=#FBBF24" -f "description=Waiting for input from reporter or stakeholder"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Status: On Hold" -f "color=#94A3B8" -f "description=Paused or blocked, not actively worked on"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Status: Blocked" -f "color=#BE185D" -f "description=Blocked by an external dependency"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Status: Complete" -f "color=#059669" -f "description=Done and ready to close"
```

## Type

```bash
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Type: Bug" -f "color=#dc143c" -f "description=Something is broken or not working as expected"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Type: Regression" -f "color=#dc143c" -f "description=Something that previously worked is now broken"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Type: Feature" -f "color=#818CF8" -f "description=New functionality or capability"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Type: Enhancement" -f "color=#38BDF8" -f "description=Improvement to an existing feature"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Type: UX" -f "color=#818CF8" -f "description=Improving the user experience without adding new features"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Type: Performance" -f "color=#F59E0B" -f "description=Speed or performance optimization"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Type: Accessibility" -f "color=#06b6d4" -f "description=A11y improvements"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Type: Security" -f "color=#F43F5E" -f "description=Security vulnerability or hardening"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Type: Idea" -f "color=#E879F9" -f "description=Concept or suggestion for future consideration"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Type: Refactoring" -f "color=#CBD5E1" -f "description=Code restructuring without changing behavior"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Type: Maintenance" -f "color=#A8A29E" -f "description=Routine upkeep, dependencies, or infrastructure"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Type: Content" -f "color=#06B6D4" -f "description=Blog posts, help articles, and other content changes"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Type: Documentation" -f "color=#0E7490" -f "description=Documentation updates"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Type: Question" -f "color=#34D399" -f "description=Needs clarification or discussion"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Type: Help Needed" -f "color=#F472B6" -f "description=Assistance needed to move forward"
```

## Scope

```bash
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Scope: Frontend" -f "color=#36454f" -f "description=Changes to Vue/JS/CSS"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Scope: Backend" -f "color=#36454f" -f "description=Changes to PHP/API/database"
glab api --method POST "groups/$GROUP_ID/labels" -f "name=Scope: Infrastructure" -f "color=#36454f" -f "description=Docker, CI/CD, deployment"
```
